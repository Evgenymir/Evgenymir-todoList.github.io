import React, { useEffect } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import Header from '../header/Header.jsx';
import FormToDo from '../formTodo/FormToDo.jsx';
import TodoList from '../todoList/TodoList.jsx';
import Footer from '../footer/Footer.jsx';
import { initApp } from '../../actions';
import FilterButtons from '../filter-buttons/Filter-buttons.jsx';

const App = ({ dispatch }) => {
    useEffect(() => {
        const init = JSON.parse(localStorage.getItem('QuickTodo'));
        if (init) {
            dispatch(initApp(init));
        }
    }, []);

    return (
        <>
            <Header title="Quick todo" />
            <FormToDo placeholder="Enter your note" />
            <FilterButtons />
            <TodoList />
            <Footer author="Evgeny Bespalov" />
        </>
    );
};

export default connect(null)(App);
