import React from 'react';
import Window from '../os/Window';
import Wordle from '../wordle/Wordle';

export interface WardleAppProps extends WindowAppProps {}

const WardleApp: React.FC<WardleAppProps> = (props) => {
    return (
        <Window
            top={20}
            left={300}
            width={600}
            height={860}
            windowBarIcon="windowGameIcon"
            windowTitle="Wardle"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2026 CRAZY_WARDEN412'}
        >
            <div className="site-page">
                <Wordle />
            </div>
        </Window>
    );
};

export default WardleApp;
