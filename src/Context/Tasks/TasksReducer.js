import {
    ADD_TASK,
    UPDATE_TASK,
    REMOVE_TASK,
    FETCH_TASKS,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ERROR,
    CLEAR_ERROR,
} from "../types";

const handlers = {
    [ADD_TASK]: (state, { id, title }) => ({
        ...state,
        tasks: [
            ...state.tasks,
            {
                id: id,
                title: title
            }
        ]
    }),
    [UPDATE_TASK]: (state, { id, title }) => ({
        ...state,
        tasks: state.tasks.map((task) => {
            if (task.id === id) {
                task.title = title;
            }
            return task;
        })
    }),
    [REMOVE_TASK]: (state, { id }) => ({
        ...state,
        tasks: state.tasks.filter((task) => {
            return task.id !== id;
        })
    }),
    [FETCH_TASKS]: (state, { tasks }) => ({
        ...state,
        tasks: tasks
    }),
    [SHOW_LOADER]: (state) => ({
        ...state,
        loading: true
    }),
    [HIDE_LOADER]: (state) => ({
        ...state,
        loading: false
    }),
    [SHOW_ERROR]: (state, { error }) => ({
        ...state,
        error: error
    }),
    [CLEAR_ERROR]: (state) => ({
        ...state,
        error: null
    }),
    DEFAULT: (state) => {
        return state;
    }
};

export const TasksReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
};