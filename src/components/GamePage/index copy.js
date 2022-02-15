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

    const valueRobot = () => {
        return Math.floor(Math.random() * (3 - 1 + 1)) + 1
    }

    const showModal = () => {
        if (gamerChoice != 0 && robotChoice != 0 && result) {
            setOpenModal(true)
        }
        // setOpenModal(true)
    }

    const gamerValue = (el) => {
        setGamerChoice(el)
        setRobotChoice(Math.floor(Math.random() * (3 - 1 + 1)) + 1);

        // if (gamerChoice === robotChoice) {
        //     setResult("N")
        // } else if ((gamerChoice === 1 && robotChoice === 2) || (gamerChoice === 2 && robotChoice === 3) || (gamerChoice === 3 && robotChoice === 1)) {
        //     setResult("D")
        // } else if  ((gamerChoice === 1 && robotChoice === 3) || (gamerChoice === 2 && robotChoice === 1) || (gamerChoice === 3 && robotChoice === 2)) {
        //     setResult("V")
        // }

        // showModal()
    }

    const matchResult = () => {
        if (gamerChoice === robotChoice) {
            return "N"
        } else if ((gamerChoice === 1 && robotChoice === 2) || (gamerChoice === 2 && robotChoice === 3) || (gamerChoice === 3 && robotChoice === 1)) {
            setRobotPoints(robotPoints + 1)
            return "D"
        } else if  ((gamerChoice === 1 && robotChoice === 3) || (gamerChoice === 2 && robotChoice === 1) || (gamerChoice === 3 && robotChoice === 2)) {
            setGamerPoints(gamerPoints + 1)
            return "V"
        }
        setIsDisabled(true)
    }

    const nextRound = () => {
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
                        (gamerChoice !== 0 && robotChoice !== 0) &&
                        <p>{matchResult()}</p>
                    }
                    <button onClick={() => nextRound()} disabled={isDisabled}>Next round</button>
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
                <button onClick={() => gamerValue(1)} disabled={isDisabled}>Pierre</button>
                <button onClick={() => gamerValue(2)} disabled={isDisabled}>Feuille</button>
                <button onClick={() => gamerValue(3)} disabled={isDisabled}>Ciseaux</button>
            </div>
            <ModalResult openModal={openModal} setOpenModal={setOpenModal} result={result} setGamerPoints={setGamerPoints} setGamerChoice={setGamerChoice} setRobotChoice={setRobotChoice} setRobotPoints={setRobotPoints} />
        </div>
    )
}

export default GamePage