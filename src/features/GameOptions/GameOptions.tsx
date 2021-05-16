import {FC} from 'react';
import clsx from 'clsx';
import StackSizeInput from "./parts/StackSizeInput";
import './GameOptions.style.scss';

export interface GameOptionsProps {
    setStackAmount: (stackAmount: number) => void
    setStackSize: (stackSize: StackSize) => void
    isVisible: boolean
    startGame: () => void
    stackAmount: number
    stackSize: StackSize
}

export interface StackSize {
    [stack: string]: number
}

export const GameOptions: FC<GameOptionsProps> = ({ setStackAmount, setStackSize, isVisible, startGame, stackSize, stackAmount}) => {
    return (
        <div className={ clsx('SettingsPopup', isVisible && 'SettingsPopup_isVisible') }>
            <div className='StackAmountWrapper'>
                <input type='number' id='stackAmount' value={stackAmount } onChange={ ({target: { value }}) => setStackAmount(Number(value)) } />
                <label htmlFor='stackAmount'>Number of Stacks</label>
            </div>
            <div className='StackSizeWrapper'>
                { [...Array(stackAmount).keys()].map((val) => <StackSizeInput key={ val } stackIdx={ val } stackSize={ stackSize } setStackSize={ setStackSize } />) }
            </div>
            <div>
                <button onClick={ () => startGame() }>
                    Save & Start Game
                </button>
            </div>
        </div>
    )
}

export default GameOptions