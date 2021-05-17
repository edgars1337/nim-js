import {FC} from 'react';
import './Introduction.style.scss'

export const Introduction: FC = () => {
    return (
        <div className='Introduction'>
            <span className='Introduction-Title'>Welcome to Nim Game!</span>
            <span className='Introduction-Instructions'>To start a new game click the settings button above and select game options</span>
            <span className='Introduction-Instructions'>You will be playing as Player and will have the first move (by default)</span>
            <span className='Introduction-Instructions'>To remove elements from a stack hover over the particular stack and you will see elements highlighted that you will remove and click</span>
            <span className='Introduction-Instructions'>The computers moves will be highlighted red for a split second</span>
        </div>
    )
}

export default Introduction;