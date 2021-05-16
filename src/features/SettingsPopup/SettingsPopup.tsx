import {FC, useState} from 'react';
import clsx from 'clsx';
import { GameSettings } from "../../App";
import './SettingsPopup.style.scss';

export interface SettingsPopupProps {
    setSettings: (arg0: GameSettings) => void,
    isVisible: boolean
}

export const SettingsPopup: FC<SettingsPopupProps> = ({ setSettings, isVisible}) => {

    const [misere, setMisere] = useState<boolean>(false)
    const [player, setPlayer] = useState<number>(1)
    const [gamesize, setGameSize] = useState<number>(3)

    return (
        <div className={ clsx('SettingsPopup', isVisible && 'SettingsPopup_isVisible') }>
            <div className='MisereWrapper'>
                <input type='checkbox' id='misere' checked={misere} onChange={ () => setMisere(!misere) }/>
                <label htmlFor='misere'>Misere Game</label>
            </div>
            <div className='AiPlayerWrapper'>
                <select id='ai-player' value={player === 1 ? 'Player 1' : 'Player 2' } onChange={ ({target: { value }}) => setPlayer( value === 'Player 1' ? 1 : 2) }>
                    <option id='1'>Player 1</option>
                    <option id='2'>Player 2</option>
                </select>
                <label htmlFor='ai-player'>AI uses player</label>
            </div>
            <div className='GameSizeWrapper'>
                <select id='gamesize' value={gamesize} onChange={ ({target: { value }}) => setGameSize(Number(value)) }>
                    <option id='3'>3</option>
                    <option id='4'>4</option>
                    <option id='5'>5</option>
                </select>
                <label htmlFor='gamesize'>Game size</label>
            </div>
            <div>
                <button onClick={ () => setSettings({ misere, player, gamesize }) }>
                    Save
                </button>
            </div>
        </div>
    )
}

export default SettingsPopup