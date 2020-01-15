import React from 'react';
import STORE from './store';
import List from './component/List';
import './App.css';



function App(props) {

  const myLists = STORE.lists.map(function(_, i){
    return <List header = {STORE.lists[i].header} key = {STORE.lists[i].id}
      cardIds = {STORE.lists[i].cardIds} allCards = {STORE.allCards}
     />
  });
 
return (
    <main className='App'>
      <nav>Trelloyes!</nav>
       {myLists}
    </main>
  );
}

export default App;