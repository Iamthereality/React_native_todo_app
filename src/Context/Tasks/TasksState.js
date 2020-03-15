import React, { useReducer } from 'react';
import { TasksContext } from './TasksContext';
import { TasksReducer } from "./TasksReducer";

export const TasksState = ({ children }) => {
    const initialState = {
        tasks: [{ id: 1, title: 'Learn React Native' }]
    };
    const [state, dispatch] = useReducer(TasksReducer, initialState);
    return (
        <TasksContext.Provider
            value={{
                tasks: state.tasks
            }}
        >
            { children }
        </TasksContext.Provider>
    );
};