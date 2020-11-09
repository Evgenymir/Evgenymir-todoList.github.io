import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import IconDelete from '../../assets/icons/delete.jsx';
import './TodoList.scss';
import { updateTask, removeTask } from '../../actions';

const mapStateToProps = (state) => {
    const { tasks: { byId, allIds } } = state;
    const { filter: { active } } = state;

    const filteredTasks = allIds.filter((id) => active === 'all' || active === byId[id].state);
    const tasks = filteredTasks.map((id) => byId[id]);

    return {
        tasks,
    };
};

class TodoList extends React.Component {
    handleCheckbox = (id) => () => {
        const { dispatch } = this.props;
        dispatch(updateTask(id));
    };

    handleRemoveTask = (id) => (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(removeTask(id));
    };

    render() {
        const { tasks } = this.props;

        return (
            <div className="todo-list">
                { tasks.map(({ title, id, state }) => (
                    <div className="todo-list__item" key={id}>
                        <label htmlFor={`checkbox-${id}`} className="todo-list__checkbox-wrap">
                            <input
                                id={`checkbox-${id}`}
                                type="checkbox"
                                className="todo-list__checkbox"
                                checked={state === 'done'}
                                onChange={this.handleCheckbox(id)}
                            />
                            <span className="todo-list__checkbox-box" />
                        </label>
                        <div className={`todo-list__text ${state === 'done' ? 'todo-list__text--line' : ''}`}>{title}</div>
                        <button type="button" className="todo-list__delete" onClick={this.handleRemoveTask(id)}>
                            <IconDelete />
                        </button>
                    </div>
                )) }
            </div>
        );
    }
}

TodoList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        state: PropTypes.string,
    })).isRequired,
};

export default connect(mapStateToProps)(TodoList);
