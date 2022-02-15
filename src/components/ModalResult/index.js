import React, { useState } from 'react'
import { styles } from './styles.js'

function ModalResult({ win, defeat, setGamerPoints, setGamerChoice, setRobotChoice, setRobotPoints, setIsDisabled }) {

    const restartFunc = () => {
        setIsDisabled(false);
        setGamerPoints(0);
        setGamerChoice(0);
        setRobotPoints(0);
        setRobotChoice(0);
    }

    return (
        <div style={styles.fondModal}>
            <div style={styles.modal}>
                <div style={styles.container}>
                    <p style={styles.text}>{ win ? "VICTOIRE 🥳👑" : defeat && "DEFAITE 😭" }</p>
                    <button style={styles.button} onClick={() => restartFunc()}>Recommencer</button>
                    <a href="/" style={styles.link}>Accueil</a>
                </div>
                
            </div>
        </div>
    );
}

export default ModalResult