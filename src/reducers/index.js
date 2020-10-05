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
        case 'ADD_TASK': {
            const { byId, allIds } = state;
            const { task } = action.payload;
            const newTask = { title: task, id: _.uniqueId('task_'), state: 'active' };

            return {
                byId: { ...byId, [newTask.id]: newTask },
                allIds: [newTask.id, ...allIds],
            };
        }
        case 'UPDATE_TASK': {
            const { id } = action.payload;
            const task = state.byId[id];
            const taskStatus = task.state === 'active' ? 'done' : 'active';
            const newTask = { ...task, state: taskStatus };
            return {
                ...state,
                byId: { ...state.byId, [task.id]: newTask },
            };
        }
        case 'REMOVE_TASK': {
            const { byId, allIds } = state;
            const { id } = action.payload;
            return {
                byId: _.omit(byId, id),
                allIds: _.without(allIds, id),
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
});

export default rootReducers;
