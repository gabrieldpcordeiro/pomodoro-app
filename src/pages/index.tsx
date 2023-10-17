import Pomodoro from "@/app/components/Pomodoro";
import TaskList from "@/app/components/TaskList";
import Navigation from "@/app/components/Navigation";
import Timer from "@/app/components/Timer";
import {Dispatch, SetStateAction, useEffect, useState} from "react";


const Index = () => {

    const [pomodoro, setPomodoro] = useState<number>(25)
    const [longBreak, setLongBreak] = useState<number>(10)
    const [shortBreak, setShortBreak] = useState<number>(5)
    const [seconds, setSeconds] = useState<number>(0);
    const [ticking, setTicking] = useState<boolean>(false);


    const [stage, setStage] = useState<number>(0)

    const switchStage = (index: number) => {
        setStage(index)
    }

    const getTickingTime = () => {
        const timeStage: { [index: number]: number } = {
            0: pomodoro,
            1: longBreak,
            2: shortBreak,
        }
        return timeStage[stage];
    }
    const updateMinute = () => {
        const updateStage: { [index: number]: Dispatch<SetStateAction<number>> } = {
            0: setPomodoro,
            1: setLongBreak,
            2: setShortBreak,
        }
        return updateStage[stage];
    }
    const clockTicking = () => {
        const minutes = getTickingTime();
        const setMinutes = updateMinute();

        if (!minutes && !seconds) {
            alert(" timer up")
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
