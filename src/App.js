import React from 'react';
import './App.css';
import Book from "./Book.js"

function App() {

  return (
    <div className="App">
      <Book/>
    {/* <form>
      <input type='text' className='App__TextInput' placeholder='Enter book name' value={input} onChange={event => setInput(event.target.value)} />
      <button type='button' className='App__Button' disabled={!input} >Search</button>
    </form> */}
    </div>
  );
}

export default App;
