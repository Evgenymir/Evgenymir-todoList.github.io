import React from 'react';
import './Filter-buttons.scss';
import { connect } from 'react-redux';
import { filterTask } from '../../actions/index';

const mapStateToProps = ({ filter, tasks }) => {
    const { active } = filter;
    return {
        activeStatus: active,
        tasks,
    };
};

const FilterButtons = ({ activeStatus, tasks, dispatch }) => {
    if (!activeStatus) {
        return null;
    }

    const handleFilter = (status) => () => {
        dispatch(filterTask(status));
    };

    const renderButtons = () => {
        return (
            <div className="filter-buttons">
                <button
                    type="button"
                    className={`filter-buttons__button ${activeStatus === 'all' ? 'active' : ''}`}
                    onClick={handleFilter('all')}
                >
                    All
                </button>
                <button
                    type="button"
                    className={`filter-buttons__button ${activeStatus === 'active' ? 'active' : ''}`}
                    onClick={handleFilter('active')}
                >
                    Active
                </button>
                <button
                    type="button"
                    className={`filter-buttons__button ${activeStatus === 'done' ? 'active' : ''}`}
                    onClick={handleFilter('done')}
                >
                    Completed
                </button>
            </div>
        );
    };

    return tasks.allIds.length ? renderButtons() : null;
};

export default connect(mapStateToProps)(FilterButtons);
