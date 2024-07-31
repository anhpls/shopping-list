import './App.css';
import cart from './shopping.png';
import React, {useState} from 'react';

function App() {

  const [inputValue, setInputValue] = useState("");
  const [groceryItems, setGroceryItems] = useState([]);

  /* 
    name: "Banana",
    quantity: 1,
    completed: true

  */



  function handleInputValueChange(e){
    setInputValue(e.target.value);
  }

  return (
    <main className="App">
        <div>
        <div>
          <h4 className='success'>You're Done</h4>
          <div className='header'>
            <h1>Shopping List</h1>
            <img src={cart} alt='shopping-cart' className='shopping-cart'/>
            <input type="text" placeholder='Add an Item...' className='item-input' onChange={handleInputValueChange} value={inputValue}/>
          </div>
        </div>
        <ul>
          <li>
            <div className='container'>
              <input type='checkbox'/>
              <p>Carrots</p>
            </div>
            <div>
              <button className='remove-button'>X</button>
            </div>
          </li>
        </ul>
        </div>
    </main>
  );
}

export default App
