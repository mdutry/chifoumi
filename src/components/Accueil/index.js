import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from './styles.js'

const Accueil = () => {
    const navigate = useNavigate();
    const [pseudo, setPseudo] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const handleClick = (e) => {
        e.preventDefault()
        localStorage.setItem('pseudo', pseudo);
        setIsDisabled(true)
        navigate("/game");
    }

    const handleChange = (e) => {
        setPseudo(e.target.value)
        setIsDisabled(false)
    }

    return (
        <div style={styles.container}>
            <div style={styles.modal}>
                <form style={styles.form} onSubmit={handleClick}>
                    <input style={styles.input} type='text' placeholder='Entrez votre pseudo' onChange={(e) => handleChange(e)} />
                    <button style={styles.button} type="submit" disabled={isDisabled}>PLAY &gt;</button>
                </form>
            </div>
        </div>
    )
}

export default Accueil