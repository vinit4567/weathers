import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ImageGallery from './Component/Imagegallery';
import Image from './Component/Image';
import Darkmode from './Component/Darkmode';
import Searchinput from './Component/Searchinput';
import Digitalclock from './Component/Digitalclock';
import Digitalclocks from './Component/Digitalclocks';
import Validation from './Component/Validation';
import Digitalclocks1 from './Component/Digitalclocks1';
import App1 from './Component/App1';
import Userlists from './Component/Userlists';
import Posts from './Component/Posts';
import Post from './Component/Post';
import User from './Component/User';
import Users from './Component/Users';
import Table from './Component/Table';
import Table1 from './Component/Table1';
import Table2 from './Component/Table2';
import Timer from './Timer';
import Todolist from './Todolist';
import Stopwatch from './Stopwatch';
import TodoApp from './Todolist';
import Todo from './Todo';
import Drag from './Drag';
import CharacterCount from './charcount';
import Filter from './filter';
import Todos from './Todos';
import Randomcolor from './Randomcolor';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoApp  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
