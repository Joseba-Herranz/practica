import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Crud from './components/crud';
import Contador from './components/contador';
import Timer from './components/timer';

function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      Router,
      null,
      React.createElement(
        'div',
        null,
        React.createElement(
          'nav',
          null,
          React.createElement(
            'ul',
            null,
            React.createElement(
              'li',
              null,
              React.createElement(Link, { to: '/crud' }, 'Crud')
            ),
            React.createElement(
              'li',
              null,
              React.createElement(Link, { to: '/timer' }, 'timer')
            ),
            React.createElement(
              'li',
              null,
              React.createElement(Link, { to: '/contador' }, 'Contador')
            )
          )
        ),
        React.createElement(
          Routes,
          null,
          React.createElement(Route, { path: '/crud', element: React.createElement(Crud, null) }),
          React.createElement(Route, { path: '/timer', element: React.createElement(Timer, null) }),
          React.createElement(Route, { path: '/contador', element: React.createElement(Contador, null) })
        )
      )
    )
  );
}

export default App;
