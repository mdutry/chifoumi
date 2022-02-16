import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from './styles.js'

const Accueil = () => {
    let navigate = useNavigate();
    const [pseudo, setPseudo] = useState('');
    const [selectValue, setSelectValue] = useState(1);
    const [winParty, setWinParty] = useState(3);
    const [isDisabled, setIsDisabled] = useState(true);

    const handleClick = (e) => {
        e.preventDefault()
        localStorage.setItem('pseudo', pseudo);
        setIsDisabled(true)
        navigate(`/game`, { state: { typeOfGame: selectValue, numberOfWinRound: winParty } });
    }

    const handleChange = (e) => {
        setPseudo(e.target.value)
        setIsDisabled(false)
    }

    const handleChangeNumber = (e) => {
        if (e.target.value > 10) {
            setWinParty(10)
        } else {
            setWinParty(e.target.value)
        }
        setIsDisabled(false)
    }

    return (
        <div style={styles.container}>
            <div style={styles.modal}>
                <h1>CHIFOUMI</h1>
                <form style={styles.form} onSubmit={handleClick}>
                    <input style={styles.input} type='text' placeholder='Entrez votre pseudo' onChange={(e) => handleChange(e)} />
                    <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)} style={styles.select}>
                        <option value={1} style={styles.options}>normal</option>
                        <option value={2} style={styles.options}>+ puit</option>
                        <option value={3} style={styles.options}>+ lézard & Spok</option>
                    </select>
                    <input style={styles.input} type='number' value={winParty} onChange={(e) => handleChangeNumber(e)} max={10} />
                    <button style={styles.button} type="submit" disabled={isDisabled}>PLAY &gt;</button>
                </form>
            </div>
        </div>
    )
}

export default Accueil