import {FC, useState, useEffect, useRef} from 'react';
import clsx from 'clsx';
import './App.css';
import GameOptions from "./features/GameOptions/GameOptions";
import Nim from './nim/Nim';
import Node from './nim/node'
import {StackSize} from "./features/GameOptions/GameOptions";
import Stacks from "./features/Stacks/Stacks";

export interface GameSettings {
    misere: boolean
    gamesize: number
    player: number
}

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

    const setStackSize = (size: StackSize) => {
        setStateStackSize(prevState => ({ ...prevState, ...size }))
    }

    const prevStackAmount = usePrevious(stackAmount) || 3;

    useEffect(() => {
        if (stackAmount < prevStackAmount) {
            setStateStackSize(prevStackSize => Object.fromEntries(Object.entries(prevStackSize).filter(([key]) => Number(key) < stackAmount)))
        }
    },[stackAmount])

    const startGame = () => {
        setIsVisible(false);
        setIsGameStarted(true)
    }

    // const node = new Node([5, 8, 13])
    // const nim = new Nim(node);
    // nim.startGame();
  return (
    <div className={clsx('App', isVisible && 'App-SettingsPopupOpen')}>
        <button onClick={ () => { setIsVisible(!isVisible); setIsGameStarted(false) } }>Settings</button>
        <GameOptions isVisible={ isVisible } startGame={ startGame } setStackAmount={ setStateStackAmount } setStackSize={ setStackSize } stackAmount={ stackAmount } stackSize={ stackSize } />
        { isGameStarted && <Stacks stacksValues={ Object.values(stackSize) } /> }
    </div>
  );
}

export default App;
