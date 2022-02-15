import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from './styles.js'

const Accueil = () => {
    const navigate = useNavigate();
    const [pseudo, setPseudo] = useState('');
    const [selectValue, setSelectValue] = useState(1);
    const [isDisabled, setIsDisabled] = useState(true);

    const handleClick = (e) => {
        e.preventDefault()
        localStorage.setItem('pseudo', pseudo);
        setIsDisabled(true)
        navigate(`/game/${selectValue}`);
    }

    const handleChange = (e) => {
        setPseudo(e.target.value)
        setIsDisabled(false)
    }

    return (
        <div style={styles.container}>
            <div style={styles.modal}>
                <h1>CHIFOUMI</h1>
                <form style={styles.form} onSubmit={handleClick}>
                    <input style={styles.input} type='text' placeholder='Entrez votre pseudo' onChange={(e) => handleChange(e)} />
                    <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                        <option value={1}>normal</option>
                        <option value={2}>+ puit</option>
                        <option value={3}>+ lézard & Spok</option>
                    </select>
                    <button style={styles.button} type="submit" disabled={isDisabled}>PLAY &gt;</button>
                </form>
            </div>
        </div>
    )
}

export default Accueil