import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';

import { TasksContext } from './TasksContext';
import { TasksReducer } from "./TasksReducer";
import {
    ADD_TASK,
    CLEAR_ERROR,
    FETCH_TASKS,
    HIDE_LOADER,
    REMOVE_TASK,
    SHOW_ERROR,
    SHOW_LOADER,
    UPDATE_TASK
} from "../types";
import { ScreenContext } from "../Screen/ScreenContext";
import { Http } from "../../http";

export const TasksState = ({ children }) => {
    const initialState = {
        tasks: [],
        loading: false,
        error: null
    };

    const { changeScreen } = useContext(ScreenContext);

    const [state, dispatch] = useReducer(TasksReducer, initialState);

    const addTask = async (title) => {
        clearError();
        try {
            const data = await Http.post('https://react-native-todo-app-fa7f0.firebaseio.com/tasks.json', { title: title});
            dispatch({ type: ADD_TASK, id: data.name, title: title });
        } catch (e) {
            showError('Somethings went wrong...');
            console.log(e);
        }
    };

    const updateTask = async (id, title) => {
        clearError();
        try {
            await Http.patch(`https://react-native-todo-app-fa7f0.firebaseio.com/tasks/${ id }.json`, { title: title });
            dispatch({ type: UPDATE_TASK, id: id, title: title });
        } catch (e) {
            showError('Somethings went wrong...');
            console.log(e);
        }
    };

    const removeTask = (id) => {
        const task = state.tasks.find((task) => task.id === id);
        Alert.alert(
            `Task will be removed!`,
            `Are you sure to delete task "${task.title}?"`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: async () => {
                        clearError();
                        changeScreen(null);
                        try {
                            await Http.delete(`https://react-native-todo-app-fa7f0.firebaseio.com/tasks/${ id }.json`);
                            dispatch({ type: REMOVE_TASK, id: id });
                        } catch (e) {
                            showError('Somethings went wrong... REMOVE');
                            console.log(e);
                        }
                    }
                },
            ],
            {cancelable: false},
        );
    };

    const fetchTasks = async () => {
        clearError();
        showLoader();
        try {
            const data = await Http.get('https://react-native-todo-app-fa7f0.firebaseio.com/tasks.json');
            let tasks;
            if (data) {
                tasks = Object.keys(data).map((key) => {
                    return {
                        ...data[key],
                        id: key
                    }
                });
            } else {
                tasks = [];
            }

            dispatch({ type: FETCH_TASKS, tasks: tasks });
        } catch (e) {
            showError('Somethings went wrong...');
            console.log(e);
        } finally {
            hideLoader();
        }
    };

    const showLoader = () => {
        dispatch({ type: SHOW_LOADER });
    };

    const hideLoader = () => {
        dispatch({ type: HIDE_LOADER });
    };

    const showError = (error) => {
        dispatch({ type: SHOW_ERROR, error: error })
    };

    const clearError = () => {
        dispatch({ type: CLEAR_ERROR });
    };

    return (
        <TasksContext.Provider
            value={ {
                tasks: state.tasks,
                addTask,
                updateTask,
                removeTask,
                fetchTasks,
                loading: state.loading,
                error: state.error
            } }
        >
            { children }
        </TasksContext.Provider>
    );
};