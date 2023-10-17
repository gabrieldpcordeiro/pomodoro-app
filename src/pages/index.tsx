import Pomodoro from "@/app/components/Pomodoro";
import TaskList from "@/app/components/TaskList";
import Navigation from "@/app/components/Navigation";
import Timer from "@/app/components/Timer";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;


const Index = () => {

    const [pomodoro, setPomodoro] = useState<number>(25)
    const [longBreak, setLongBreak] = useState<number>(10)
    const [shortBreak, setShortBreak] = useState<number>(5)
    const [seconds, setSeconds] = useState<number>(0);
    const [ticking, setTicking] = useState<boolean>(false);
    const [consumedSecond, setConsumedSecond] = useState<number>(0);

    const [stage, setStage] = useState<number>(0)

    const switchStage = (index: number) => {
        const isYes = consumedSecond && stage !== index ? confirm("Are you sure you want to switch?") : false
        if (isYes) {
            reset();
            setStage(index)
        } else if (!consumedSecond) {
            setStage(index)
        }
    }

    const getTickingTime = () => {
        const timeStage: { [index: number]: number } = {
            0: pomodoro,
            1: shortBreak,
            2: longBreak,
        }
        return timeStage[stage];
    }
    const updateMinute = () => {
        const updateStage: { [index: number]: Dispatch<SetStateAction<number>> } = {
            0: setPomodoro,
            1: setShortBreak,
            2: setLongBreak,
        }
        return updateStage[stage];
    }

    const reset = () => {
        setTicking(false);
        setSeconds(0);
        setConsumedSecond(0);
        setPomodoro(25);
        setLongBreak(10);
        setShortBreak(5);
    }
    const clockTicking = () => {
        const minutes = getTickingTime();
        const setMinutes = updateMinute();

        if (!minutes && !seconds) {
            reset();
        } else if (!seconds) {
            setMinutes((minute: number) => minute - 1);
            setSeconds(59);
        } else {
            setSeconds((second) => second - 1);
        }
    }


    useEffect(() => {
        const timer = setInterval(() => {
            if (ticking) {
                setConsumedSecond(value => value + 1)
                clockTicking();
            }
        }, 1000);

        return () => {
            clearInterval(timer)
        };
    }, [seconds, pomodoro, longBreak, shortBreak, ticking]);
    return (
        <div className="bg-gray-900 min-h-screen font-inter">
            <div className="max-w-2xl min-h-screen mx-auto">
                <Navigation/>
                <Timer
                    stage={stage}
                    switchStage={switchStage}
                    getTickingTime={getTickingTime}
                    seconds={seconds}
                    ticking={ticking}
                    setTicking={setTicking}
                />
            </div>
        </div>
    );
};

export default Index;
