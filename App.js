import React, { useState } from 'react';
import { Alert } from 'react-native';

import * as Font from 'expo-font';
import { AppLoading } from "expo";

import { Navbar } from "./src/Components/Navbar";
import { MainScreen } from "./src/Screens/MainScreen";
import { TaskScreen } from "./src/Screens/TaskScreen";

async function load_application() {
    await Font.loadAsync({
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-thin': require('./assets/fonts/Roboto-Thin.ttf')
    })
}

export default function App() {
    const [isReady, setIsReady] = useState(false);
    const [taskID, setTaskID] = useState(null);
    const [tasks, setTasks] = useState([]);

    if (!isReady) {
        return (
            <AppLoading startAsync={ load_application }
                        onError={ (error) => console.log(error) }
                        onFinish={() => setIsReady(true)}
            />
        );
    }

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
        const selected_task = tasks.find((task) => task.id === id);
        Alert.alert(
            `Task will be removed!`,
            `Are you sure to delete task "${selected_task.title}?"`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () => {
                        setTaskID(null);
                        setTasks(prevState => prevState.filter(task => task.id !== id));
                    }
                },
            ],
            {cancelable: false},
        );

    };

    const updateTask = (id, title) => {
        setTasks((old) => old.map((task) => {
                if (task.id === id) {
                    task.title = title;
                }
                return task;
            })
        );
    };

    let content = (
        <MainScreen tasks={ tasks }
                    addTask={ addTask }
                    removeTask={ removeTask }
                    openTask={ setTaskID }
        />
    );

    if (taskID) {
        const selected_task = tasks.find((task) => task.id === taskID);
        content = (
            <TaskScreen backToTasksList={ setTaskID }
                        task={ selected_task }
                        removeTask={ removeTask }
                        onSave={ updateTask }
            />
        )
    }

    return (
        <>
            <Navbar title={ `Todo App` }/>
            { content }
        </>
    );
}