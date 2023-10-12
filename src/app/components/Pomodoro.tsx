import React, { useState, useEffect } from 'react';

const Pomodoro = () => {
    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime(time - 1);
            }, 1000);
        } else if (time === 0) {

            // @ts-ignore
            clearInterval(interval);
            // Handle the end of the Pomodoro session here
        }

        return () => {
            clearInterval(interval);
        };
    }, [isActive, time]);

    return (
        <div className="pomodoro-container">
            <h1 className="text-4xl font-bold">Pomodoro Timer</h1>
            <div className="time-display">
                {Math.floor(time / 60).toString().padStart(2, '0')}:
                {(time % 60).toString().padStart(2, '0')}
            </div>
            <button className="btn" onClick={toggleTimer}>
                {isActive ? 'Pause' : 'Start'}
            </button>
        </div>
    );
};

export default Pomodoro;
