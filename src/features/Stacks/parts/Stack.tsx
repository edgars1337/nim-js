import {FC, useState} from 'react'
import clsx from 'clsx'
import {USER_MOVE} from '../../../consts';
import './Stack.style.scss'

export interface StackProps {
    stackSize: number
    move?: string
    getPlayerMove: (stack: number, amount: number) => void
    idx: number
    coloredRed: number
}

export const Stack: FC<StackProps> = ({stackSize, move, getPlayerMove, idx, coloredRed}) => {
    const [hoveringElement, setHoveringElement] = useState<number>(-1)

    return (
        <div className={clsx('StackWrapper')}>
                {[...Array(stackSize).keys()].map((val) =>
                    <div id={String(val)} className={clsx('StackWrapper-Element', val <= hoveringElement && 'StackWrapper-Element_isActive', val < coloredRed && 'StackWrapper-Element_isRed')}
                        onMouseEnter={({currentTarget: {id}}) => setHoveringElement(Number(id))}
                        onMouseLeave={() => setHoveringElement(-1)}
                         onClick={({currentTarget: {id}}) => {
                             if (move === USER_MOVE) {
                                 getPlayerMove(idx, Number(id))
                             }
                         }}
                    >&nbsp;
                    </div>)}
        </div>
    )
}
export default Stack;