import Pomodoro from "@/app/components/Pomodoro";
import TaskList from "@/app/components/TaskList";
import Navigation from "@/app/components/Navigation";
import Timer from "@/app/components/Timer";
import {useState} from "react";


const Index = () => {

    const [pomodoro, setPomodoro] = useState<number>(25)
    const [longBreak, setLongBreak] = useState<number>(10)
    const [shortBreak, setShortBreak] = useState<number>(5)

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
    return (
        <div className="bg-gray-900 min-h-screen font-inter">
            <div className="max-w-2xl min-h-screen mx-auto">
                <Navigation/>
                <Timer
                    stage={stage}
                    switchStage={switchStage}
                    getTickingTime={getTickingTime}
                />
            </div>
            {/*<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">*/}
            {/*    <TaskList />*/}
            {/*</div>*/}
        </div>
    );
};

export default Index;
