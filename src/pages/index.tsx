import Pomodoro from "@/app/components/Pomodoro";
import TaskList from "@/app/components/TaskList";


const Home = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full sm:w-1/2 md:w-2/3 lg:w-2/4">
                <Pomodoro />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <TaskList />
            </div>
        </div>
    );
};

export default Home;
