import React from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import './App.css';

import {Sidebar} from './components/Sidebar';
import {MessagesList} from './components/MessagesList';
import {AddMessage} from './components/AddMessage'

import Main from './Main';
import chat from './reducers';
import { addUser } from './actions';

// const store = createStore(chat)

// store.dispatch(addUser('Me'))

function App() {
  return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage/>
        </section>
      </div>
  );
}

export default App;
 