import React, {useState, useEffect, useRef} from 'react';
import Alarm from "@/app/components/Alarm";

const Pomodoro = () => {
    const [time, setTime] = useState(5); // Default time is 25 minutes
    const [isActive, setIsActive] = useState(false);

    const alarmRef = useRef<HTMLAudioElement | null>(null);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setIsActive(false);
        setTime(25 * 60); // Reset the time to 25 minutes
    };

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;
        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime(time - 1);
            }, 1000);
        } else if (time === 0) {
            if (interval) {
                clearInterval(interval);
                interval = undefined;
            }
            if (alarmRef.current) {
                alarmRef.current.play();
            }  // Handle the end of the Pomodoro session here
        }

        return () => {
            clearInterval(interval);
        };
    }, [isActive, time]);

    return (
        <div className="pomodoro-container flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold my-4">Pomodoro Timer</h1>
            <div className="time-display text-5xl my-4">
                {Math.floor(time / 60).toString().padStart(2, '0')}:
                {(time % 60).toString().padStart(2, '0')}
            </div>
            <div className="button-container flex text-white justify-center space-x-4 items-center">
                {time > 0 && isActive ? (
                    <>
                        <button
                            className="btn pause-btn bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg"
                            onClick={toggleTimer}
                        >
                            Stop
                        </button>
                        <button
                            className="btn restart-btn bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg"
                            onClick={resetTimer}
                        >
                            Restart
                        </button>
                    </>
                ) : time > 0 ? (
                    <button
                        className="btn start-btn bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg"
                        onClick={toggleTimer}
                    >
                        Start
                    </button>
                ) : (
                    <button
                        className="btn restart-btn bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg"
                        onClick={resetTimer}
                    >
                        Restart
                    </button>
                )}
            </div>
            <Alarm ref={alarmRef}/>
        </div>
    );
};

export default Pomodoro;
