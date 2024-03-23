import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ProgressBar.css';

function CircularProgressBar() {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (percentage < 80) {
                setPercentage(percentage + 1);
            }
        }, 20);
    }, [percentage]);

    return (
        <div className="progress-container">
            <div className="progress-box">
            <h3>CSS</h3>
                <div className="progressbar-container">
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={{
                            path: {
                                // Change the color of the progress bar when it reaches 80%
                                stroke: percentage < 80 ? "aqua" : "#b3b698",
                            },
                            text: {
                                fontFamily:"sans-serif",
                                fontWeight:"bold",
                                fontSize:"15px",
                                fill: percentage < 80 ? "#000" : "#000",
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default CircularProgressBar;
