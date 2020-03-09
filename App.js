import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from "./src/Components/Navbar";
import { MainScreen } from "./src/Screens/MainScreen";
import { TaskScreen } from "./src/Screens/TaskScreen";

export default function App() {
    const [taskID, setTaskID] = useState(null);
    const [tasks, setTasks] = useState([]);

    const addTask = (title) => {
        setTasks((prevState) => [
            ...prevState,
            {
                id:Date.now().toString(),
                title
            }
        ]);
    };

    const removeTask = (id) => {
        setTasks(prevState => prevState.filter(task => task.id !== id));
    };

    let content = (
        <MainScreen tasks={ tasks }
                    addTask={ addTask }
                    removeTask={ removeTask }
                    openTask={ setTaskID }
        />
    );

    if (taskID) {
        content = (
            <TaskScreen backToTasksList={ setTaskID }/>
        )
    }

    return (
        <>
            <Navbar title={ `Todo App` }/>
            { content }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10
    }
});
