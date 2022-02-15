import react, { useState } from "react";
import { styles } from './styles'

const GamerDetails = ({ robot, pseudo, points }) => {
    const pointsColor = robot ? "#F26659" : "#8CA9D3"

    return (
        <div style={styles.container}>
            <p style={styles.pseudo}>{robot ? "Rob Bot" : pseudo}</p>
            <div style={styles.scoreContainer}>
                <p style={styles.score}>{points} / 3</p>
                <div style={styles.svgContainer}>
                    {
                        [1, 2, 3].map((el, index) => {
                            return (
                                <>
                                    {
                                        (points >= el)
                                        ? <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={pointsColor} style={{ width: "2em" }} key={`id_${el}_${index}`}>
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={pointsColor} style={{ width: "2em" }} key={`id_${el}_${index}`}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    }
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default GamerDetails