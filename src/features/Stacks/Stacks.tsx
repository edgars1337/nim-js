import {FC} from 'react';
import clsx from 'clsx';
import Stack from "./parts/Stack";
import './Stacks.style.scss'
import {StackSize} from "../GameOptions/GameOptions";

export interface StacksProps {
    stacksValues: number[]
    move: string
    getPlayerMove: (stack: number, amount: number) => void
    divRef: any
    coloredRed: StackSize
}

export const Stacks: FC<StacksProps> = ({stacksValues, move, getPlayerMove, divRef, coloredRed}) =>
    (
        <div className={clsx('StacksWrapper')} ref={divRef}>
            {stacksValues.map((val, idx) => <Stack idx={idx} coloredRed={coloredRed?.[idx] || -1} stackSize={val}
                                                   move={move} getPlayerMove={getPlayerMove}/>)}
        </div>
    )


export default Stacks;