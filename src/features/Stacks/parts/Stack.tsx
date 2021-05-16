import {FC, useState} from 'react'
import clsx from 'clsx';
import './Stack.style.scss'

export interface StackProps {
    stackSize: number
}

export const Stack: FC<StackProps> = ({stackSize}) => {
    const [hoveringElement, setHoveringElement] = useState<number>(-1)
    return (
        <div className={clsx('StackWrapper')}>
            <table className={clsx('StackWrapper-Table')}>
                <tbody>
                {[...Array(stackSize).keys()].map((val) => <tr>
                    <td key={String(val)} id={String(val)} className={clsx('StackWrapper-Element', val <= hoveringElement && 'StackWrapper-Element_isActive')}
                        onMouseEnter={({currentTarget: {id}}) => setHoveringElement(Number(id))}
                        onMouseLeave={() => setHoveringElement(-1)}>yee
                    </td>
                </tr>)}
                </tbody>
            </table>
        </div>
    )
}
export default Stack;