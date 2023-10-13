import React, { useState } from 'react';

interface Task {
    name: string;
    completed: boolean;
}

const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            const newTaskObject: Task = { name: newTask, completed: false };
            setTasks([...tasks, newTaskObject]);
            setNewTask('');
        }
    };

    const removeTask = (index: number) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const markTaskComplete = (index: number) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    return (
        <div className="my-4 w-full flex justify-center items-center">
            <div className="w-full">
                <input
                    type="text"
                    placeholder="Add a task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full">
                    Add Task
                </button>
                <div className="max-h-60 overflow-y-auto mt-4 w-full">
                    <ul>
                        {tasks.map((task, index) => (
                            <li key={index} className="flex items-center justify-between p-2 border-b border-gray-300">
                                <div>
                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={() => markTaskComplete(index)}
                                            className="form-checkbox h-5 w-5 text-blue-600 rounded-full border-2 border-gray-400 focus:ring-0"
                                        />
                                        <span className={`ml-2 font-sans text-xl ${task.completed ? 'line-through' : ''}`}>
                      {task.name}
                    </span>
                                    </label>
                                </div>
                                <button
                                    onClick={() => removeTask(index)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TaskList;
