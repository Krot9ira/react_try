import React from 'react'
import WhatLis from './What/WhatLis';

function App() {
  //const q = React.useState()
  let whats = [
    {id: 1, completed: false, title: 'Learn React'},
    {id: 2, completed: false, title: 'Read about CDN'},
    {id: 3, completed: false, title: 'Read about WEBpack'}
  ]

  function toggleWhatList(id){
    whats = whats.map(todo =>{
      if (whats.id === id){
        whats.completed = !whats.completed
      }
      return whats
    })
  }

  return (
    <div className="App">
      
      <h1>List to do in We.</h1>
      <WhatLis whats={whats} onToggle={toggleWhatList}/>
    </div>
  );
}

export default App;
