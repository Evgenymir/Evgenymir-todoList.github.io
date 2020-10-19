export const updateTaskText = (text) => ({
    type: 'TEXT_UPDATE',
    payload: {
        text,
    },
});

export const initApp = (tasks) => ({
    type: 'INIT_APP',
    payload: {
        tasks,
    },
});

export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: {
        task,
    },
});

export const updateTask = (id) => ({
    type: 'UPDATE_TASK',
    payload: {
        id,
    },
});

export const removeTask = (id) => ({
    type: 'REMOVE_TASK',
    payload: {
        id,
    },
});
