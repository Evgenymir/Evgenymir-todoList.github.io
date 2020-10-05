import React from 'react';
import './App.scss';
import Header from '../header/Header.jsx';
import FormToDo from '../formTodo/FormToDo.jsx';
import TodoList from '../todoList/TodoList.jsx';
import Footer from '../footer/Footer.jsx';

const App = () => (
    <>
        <Header title="Quick todo" />
        <FormToDo placeholder="Enter your note" />
        <TodoList />
        <Footer author="Evgeny Bespalov" />
    </>
);

export default App;
