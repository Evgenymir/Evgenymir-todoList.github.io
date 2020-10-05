import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateTaskText, addTask } from '../../actions/index';
import './FormToDo.scss';

const mapStateToProps = (state) => {
    const { taskText } = state;
    return {
        taskText,
    };
};

class FormToDo extends React.Component {
    handleInputChange = ({ target }) => {
        const { dispatch } = this.props;
        dispatch(updateTaskText(target.value));
    };

    handleSubmitForm = (e) => {
        e.preventDefault();
        const { dispatch, taskText } = this.props;
        dispatch(addTask(taskText));
    };

    render() {
        const { placeholder, taskText } = this.props;

        return (
            <form className="form-todo" onSubmit={this.handleSubmitForm}>
                <div className="form-todo__input-wrap">
                    <input
                        type="text"
                        className="form-todo__input"
                        name="note"
                        id="note"
                        placeholder={placeholder}
                        value={taskText}
                        onChange={this.handleInputChange}
                    />
                    <span className="form-todo__label">{placeholder}</span>
                </div>
                <button type="submit" disabled={taskText.trim().length === 0} className="form-todo__button">Add Todo</button>
            </form>
        );
    }
}

FormToDo.defaultProps = {
    placeholder: 'Enter your note',
    taskText: '',
};

FormToDo.propTypes = {
    placeholder: PropTypes.string,
    taskText: PropTypes.string,
};

export default connect(mapStateToProps)(FormToDo);
