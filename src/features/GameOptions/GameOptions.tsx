import {FC, useState} from 'react';
import clsx from 'clsx';
import StackSizeInput from './parts/StackSizeInput';
import './GameOptions.style.scss';
import {COMPUTER_MOVE} from "../../consts";

export interface GameOptionsProps {
    setStackAmount: (stackAmount: number) => void
    setStackSize: (stackSize: StackSize) => void
    isVisible: boolean
    startGame: () => void
    stackAmount: number
    stackSize: StackSize
    move?: string
    setMove: (move: string) => void
}

export interface StackSize {
    [stack: string]: number
}

export const GameOptions: FC<GameOptionsProps> = ({
                                                      setStackAmount,
                                                      setStackSize,
                                                      isVisible,
                                                      startGame,
                                                      stackSize,
                                                      stackAmount,
                                                      setMove
                                                  }) => {
    const [firstMove, setFirstMove] = useState<boolean>(true)

    const onStartGameClick = () => {
        startGame();
        if (!firstMove) {
            setMove(COMPUTER_MOVE);
        }
    }

    return (
        <div className={clsx('SettingsPopup', isVisible && 'SettingsPopup_isVisible')}>
            <div className='SettingsPopup-StackAmountWrapper'>
                <input type='number' id='stackAmount' className='SettingsPopup-StackAmount' value={stackAmount}
                       onChange={({target: {value}}) => setStackAmount(Number(value))}/>
                <label htmlFor='stackAmount'>Number of Stacks</label>
            </div>
            <div className='SettingsPopup-StackSizeWrapper'>
                {[...Array(stackAmount).keys()].map((val) => <StackSizeInput key={val} stackIdx={val}
                                                                             stackSize={stackSize}
                                                                             setStackSize={setStackSize}/>)}
            </div>
            <div className='SettingsPopup-FirstMoveWrapper'>
                <input type='checkbox' id='firstmove' className='SettingsPopup-FirstMove' checked={firstMove}
                       onChange={({target: {checked}}) => setFirstMove(checked)}/>
                <label htmlFor='firstmove'>Player makes first move</label>
            </div>
            <div className='SettingsPopup-StartWrapper'>
                <button onClick={onStartGameClick}>
                    Save & Start Game
                </button>
            </div>
        </div>
    )
}

export default GameOptions