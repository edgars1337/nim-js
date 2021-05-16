import {FC} from 'react';
import clsx from 'clsx';
import Stack from "./parts/Stack";
import './Stacks.style.scss'

export interface StacksProps {
    stacksValues: number[]
}

export const Stacks:FC<StacksProps> = ({ stacksValues }) => {
    return (
        <div className={ clsx('StacksWrapper') }>
            { stacksValues.map((val) => <Stack key={val} stackSize={val} />) }
        </div>
    )
}

export default Stacks;