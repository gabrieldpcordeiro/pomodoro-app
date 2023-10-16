import React from 'react';
import {FiSettings, FiClock} from "react-icons/fi";

const Navigation = () => {
    return (
        <nav className="pt-5 text-white flex justify-between w-11/12 mx-auto">
            <div className="fex items-center gap-1 cursor-pointer">
                <FiClock className="text-sm"/>
                <h1>Productivity</h1>
            </div>
            <FiSettings className="text-2xl cursor-pointer"/>
        </nav>
    );
};

export default Navigation;