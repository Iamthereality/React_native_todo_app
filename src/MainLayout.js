import React, { useContext } from 'react';

import { Navbar } from "./Components/Navbar";
import { MainScreen } from "./Screens/MainScreen";
import { TaskScreen } from "./Screens/TaskScreen";

import { ScreenContext } from "./Context/Screen/ScreenContext";

export const MainLayout = () => {
    const { taskID } = useContext(ScreenContext);

    return (
        <>
            <Navbar title={ `Todo App` }/>
            { taskID ? <TaskScreen/> : <MainScreen/>}
        </>
    );
};