import {FC, useState} from 'react';
import clsx from 'clsx';
import './App.css';
import SettingsPopup from "./features/SettingsPopup/SettingsPopup";
import Nim from './nim/Nim';
import Node from './nim/node'

export interface GameSettings {
    misere: boolean
    gamesize: number
    player: number
}

export const App: FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [settings, setSettings] = useState<GameSettings | {}>({})
    const node = new Node([5, 8, 13])
    const nim = new Nim(node);
    nim.startGame();

    const setCurrentSettings = (arg0: GameSettings) => {
        setIsVisible(false)
        setSettings(arg0)
    }
  return (
    <div className={clsx('App', isVisible && 'App-SettingsPopupOpen')}>
        <button onClick={ () => setIsVisible(true) }>Settings</button>
        <SettingsPopup setSettings={ setCurrentSettings } isVisible={ isVisible } />
    </div>
  );
}

export default App;
