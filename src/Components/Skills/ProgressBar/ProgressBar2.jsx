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
               <h1>CSS</h1>
                <div className="progressbar-container">
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={{
                            path: {
                                // Change the color of the progress bar when it reaches 80%
                                stroke: percentage < 80 ? "aqua" : "blue",
                            },
                            text: {
                                // Change the color of the text when the percentage is 80%
                                fontWeight: "bold",
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
