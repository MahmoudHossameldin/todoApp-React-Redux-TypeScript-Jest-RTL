import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='App'>
      <h1>todos</h1>
      <div className='container'>
        <TodoInput />
        <TodoList />
        <Footer />
      </div>
    </div>
  );
};

export default App;
