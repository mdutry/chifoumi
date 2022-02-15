import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CiseauxIcon from "../../svgIcon/CiseauxIcon.js";
import FeuilleIcon from "../../svgIcon/FeuilleIcon.js";
import PierreIcon from "../../svgIcon/PierreIcon.js";
import GamerDetails from "../GamerDetails/index.js";
import ModalResult from "../ModalResult/index.js";
import { styles } from './styles.js'

const GamePage = () => {
    const [openModal, setOpenModal] = useState(false)
    const [gamerPoints, setGamerPoints] = useState(0);
    const [gamerChoice, setGamerChoice] = useState(0);
    const [robotPoints, setRobotPoints] = useState(0);
    const [robotChoice, setRobotChoice] = useState(0);
    const [result, setResult] = useState();
    const [isDisabled, setIsDisabled] = useState(false);

    const pseudo = localStorage.getItem('pseudo')

    const showModal = () => {
        if (gamerChoice != 0 && robotChoice != 0 && result) {
            setOpenModal(true)
        }
        // setOpenModal(true)
    }

    const gamerValue = (el) => {
        setIsDisabled(true)
        let robotValue = Math.floor(Math.random() * (3 - 1 + 1)) + 1
        setGamerChoice(el)
        setRobotChoice(robotValue);

        if (el === robotValue) {
            return setResult("Match nul 🙈🙉🙊")
        } else if ((el === 1 && robotValue === 2) || (el === 2 && robotValue === 3) || (el === 3 && robotValue === 1)) {
            setRobotPoints(robotPoints + 1)
            return setResult("Perdu 💩")
        } else if  ((el === 1 && robotValue === 3) || (el === 2 && robotValue === 1) || (el === 3 && robotValue === 2)) {
            setGamerPoints(gamerPoints + 1)
            return setResult("Gagné ✌️")
        }
    }

    const nextRound = () => {
        setIsDisabled(false)
        setGamerChoice(0)
        setRobotChoice(0)
    }

    return (
        <div style={styles.container}>
            <div style={styles.gamerDetails}>
                <GamerDetails pseudo={pseudo} points={gamerPoints} />
                <Link to='/' style={styles.homeButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" style={{ width: "50%" }}>
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                </Link>
                <GamerDetails robot points={robotPoints} />
            </div>
            <div style={styles.resultContainer}>
                <div style={styles.resultDiv}>
                    {
                        gamerChoice === 1
                        ? <PierreIcon />
                        : gamerChoice === 2
                        ? <FeuilleIcon />
                        : gamerChoice === 3
                        && <CiseauxIcon />
                    }
                </div>
                <div style={styles.resultDiv}>
                    {
                        (gamerChoice !== 0 && robotChoice !== 0)
                        && <>
                            <p style={styles.resultText}>{result}</p>
                            <button style={styles.buttonNext} onClick={() => nextRound()} disabled={!isDisabled}>Next round</button>
                        </>
                    }
                </div>
                <div style={styles.resultDiv}>
                    {
                        robotChoice === 1
                        ? <PierreIcon />
                        : robotChoice === 2
                        ? <FeuilleIcon />
                        : robotChoice === 3
                        && <CiseauxIcon />
                    }
                </div>
            </div>
            <div style={styles.buttonContainer}>
                <button onClick={() => gamerValue(1)} disabled={isDisabled} style={isDisabled ? styles.buttonDisabled : styles.button}>Pierre</button>
                <button onClick={() => gamerValue(2)} disabled={isDisabled} style={isDisabled ? styles.buttonDisabled : styles.button}>Feuille</button>
                <button onClick={() => gamerValue(3)} disabled={isDisabled} style={isDisabled ? styles.buttonDisabled : styles.button}>Ciseaux</button>
            </div>
            {
                gamerPoints === 3
                ? <ModalResult win setGamerPoints={setGamerPoints} setGamerChoice={setGamerChoice} setRobotChoice={setRobotChoice} setRobotPoints={setRobotPoints} setIsDisabled ={setIsDisabled} />
                : (robotPoints === 3)
                && <ModalResult defeat setGamerPoints={setGamerPoints} setGamerChoice={setGamerChoice} setRobotChoice={setRobotChoice} setRobotPoints={setRobotPoints} setIsDisabled ={setIsDisabled} />
            }
        </div>
    )
}

export default GamePage