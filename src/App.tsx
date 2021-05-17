import {FC, useState, useEffect, useRef, MutableRefObject} from 'react';
import clsx from 'clsx';
import './App.style.scss';
import GameOptions from "./features/GameOptions/GameOptions";
import Nim from './nim/Nim';
import Node from './nim/node'
import {StackSize} from "./features/GameOptions/GameOptions";
import Stacks from "./features/Stacks/Stacks";
import {USER_MOVE, COMPUTER_MOVE} from './consts';
import Introduction from "./features/Introduction/Introduction";

export const usePrevious = (value: any) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export const App: FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [isGameStarted, setIsGameStarted] = useState<boolean>(false)

    const [stackSize, setStateStackSize] = useState<StackSize>({})
    const [stackAmount, setStateStackAmount] = useState<number>(3)
    const [move, setMove] = useState<string>(USER_MOVE)
    const [coloredRed, setColoredRed] = useState<StackSize>({})
    const [winner, setWinner] = useState<string>('')
    const [isInstructionShown, setInstructionShow] = useState<boolean>(true)

    const setStackSize = (size: StackSize) => {
        setStateStackSize(prevState => ({...prevState, ...size}))
    }

    const prevStackAmount = usePrevious(stackAmount) || 3;
    const prevMove = usePrevious(move);

    // defining them here to have access in multiple functions
    const nodeRef = useRef<Node>({} as Node);
    const nimRef = useRef<Nim>({} as Nim);

    const divRef = useRef() as MutableRefObject<HTMLDivElement>

    const startGame = () => {
        setIsVisible(false)
        setIsGameStarted(true)

        nodeRef.current = new Node(Object.values(stackSize));
        nimRef.current = new Nim(nodeRef.current);

    }

    const getPlayerMove = (stack: number, amount: number): void => {
        // amount + 1 due to id's starting from 0
        const result = nimRef.current.playerMove(stack, amount + 1);
        const stacks = result.reduce((acc, val, idx) => ({...acc, [idx]: val}), {})

        setStateStackSize(stacks)
        setMove(COMPUTER_MOVE)
    }

    const getComputerMove = (): void => {
        const result = nimRef.current.computerMove();
        const stacks: StackSize = result.reduce((acc, val, idx) => ({...acc, [idx]: val}), {})

        const computerMove = Object.fromEntries(Object.entries(stackSize).map(([key, val]) => [key, val - stacks[key]]))
        setColoredRed(computerMove);

        setTimeout(() => {
            setColoredRed({})
            setStateStackSize(stacks)
            setMove(USER_MOVE)
        }, 250)
    }

    const onPlayAgainClick = (): void => {
        setWinner('')
        setStateStackSize({})
        setStateStackAmount(3)
        setIsVisible(true)
    }

    useEffect(() => {
        if (move === COMPUTER_MOVE) {
            getComputerMove()
        }

        if (Object.keys(nimRef?.current)?.length && nimRef.current.getIsEmpty()) {
            setIsGameStarted(false)
            setWinner(prevMove === USER_MOVE ? 'You win!' : 'Computer win!')
        }
    }, [move])

    useEffect(() => {
        if (isGameStarted) {
            const height = divRef.current?.getBoundingClientRect()?.height;
            if (height) {
                divRef.current.style.height = `${height}px`
            }
        }
    }, [isGameStarted])

    useEffect(() => {
        if (stackAmount < prevStackAmount) {
            setStateStackSize(prevStackSize => Object.fromEntries(Object.entries(prevStackSize).filter(([key]) => Number(key) < stackAmount)))
        }
    }, [stackAmount])

    useEffect(() => {
        if(isInstructionShown && isVisible) {
            setInstructionShow(false)
        }
    },[isVisible])

    return (
        <div className={clsx('App', isVisible && 'App-SettingsPopupOpen')}>
            <button onClick={() => {
                setIsVisible(!isVisible);
                setIsGameStarted(false)
            }}>Settings
            </button>
            { isInstructionShown && <Introduction /> }
            { isVisible && (<GameOptions isVisible={isVisible} startGame={startGame} setStackAmount={setStateStackAmount}
                         setStackSize={setStackSize} stackAmount={stackAmount} stackSize={stackSize} setMove={setMove}/>) }
            {isGameStarted &&
            <Stacks divRef={divRef} stacksValues={Object.values(stackSize)} getPlayerMove={getPlayerMove} move={move}
                    coloredRed={coloredRed}/>}
            {winner && (
                <div className='App-WinnerWrapper'>
                    <span className='App-WhoWon'>{winner}</span>
                    <button className='App-PlayAgainButton' onClick={onPlayAgainClick}>Play Again?</button>
            </div>)}
        </div>
    );
}

export default App;
