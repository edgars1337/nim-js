/* eslint-disable react-hooks/exhaustive-deps */
import {FC, useEffect} from 'react';
import clsx from 'clsx';
import {StackSize} from '../GameOptions';
import {DEFAULT_NUMBER_OF_ELEMENTS_IN_STACK, MIN_STACK_SIZE} from '../consts';
import './StackSizeInput.style.scss';

export interface StackSizeInputProps {
    stackIdx: number
    stackSize: StackSize
    setStackSize: (size: StackSize) => void
}

export const StackSizeInput: FC<StackSizeInputProps> = ({stackIdx, stackSize = {}, setStackSize}) => {
    useEffect(() => {
        setStackSize({[stackIdx]: DEFAULT_NUMBER_OF_ELEMENTS_IN_STACK})
    }, [])
    return (
        <div className={clsx('StackSizeInputWrapper')}>
            <input type='number' id={String(stackIdx)} value={stackSize?.[stackIdx] || DEFAULT_NUMBER_OF_ELEMENTS_IN_STACK} min={MIN_STACK_SIZE}
                   onChange={({target: {value}}) => setStackSize({[stackIdx]: Number(value)})}/>
            <label htmlFor={String(stackIdx)}>{ `Number Of elements in stack ${stackIdx + 1 }` }</label>
        </div>
    )
}

export default StackSizeInput;
