import { combineReducers } from 'redux';
import _ from 'lodash';

const taskText = (state = '', action) => {
    switch (action.type) {
        case 'TEXT_UPDATE': {
            return action.payload.text;
        }
        case 'ADD_TASK': {
            return '';
        }
        default: {
            return state;
        }
    }
};

const tasks = (state = { byId: {}, allIds: [] }, action) => {
    switch (action.type) {
        case 'INIT_APP': {
            return action.payload.tasks;
        }
        case 'ADD_TASK': {
            const { byId, allIds } = state;
            const { task } = action.payload;
            const uniqueId = _.uniqueId(`task_${task}-${Math.random()}`);
            const newTask = { title: task, id: uniqueId, state: 'active' };
            const result = {
                byId: { ...byId, [newTask.id]: newTask },
                allIds: [newTask.id, ...allIds],
            };

            localStorage.setItem('QuickTodo', JSON.stringify(result));

            return result;
        }
        case 'UPDATE_TASK': {
            const { id } = action.payload;
            const task = state.byId[id];
            const taskStatus = task.state === 'active' ? 'done' : 'active';
            const newTask = { ...task, state: taskStatus };
            const result = {
                ...state,
                byId: { ...state.byId, [task.id]: newTask },
            };

            localStorage.setItem('QuickTodo', JSON.stringify(result));

            return result;
        }
        case 'REMOVE_TASK': {
            const { byId, allIds } = state;
            const { id } = action.payload;
            const result = {
                byId: _.omit(byId, id),
                allIds: _.without(allIds, id),
            };

            localStorage.setItem('QuickTodo', JSON.stringify(result));

            return result;
        }
        default: {
            return state;
        }
    }
};

const filter = (state = {}, action) => {
    switch (action.type) {
        case 'INIT_APP': {
            return {
                active: 'all',
            };
        }
        case 'ADD_TASK': {
            return {
                active: 'all',
            };
        }
        case 'FILTER_TASKS': {
            return {
                active: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};

const rootReducers = combineReducers({
    taskText,
    tasks,
    filter,
});

export default rootReducers;
