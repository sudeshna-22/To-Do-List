import React, { useState } from 'react'
import './input.css'
import List from './List';

export default function Input() {

    const [inputText, setInputText] = useState("");
    const [addedItems, setAddedItems] = useState([]);

    const writeItem = (event) => { 
        setInputText(event.target.value);
    };

    const addItem = (event) => { 
        setAddedItems((oldItems) => {
            return [...oldItems, inputText];
        })
        setInputText("");
    };

        
    const deleteItem = (id) => { 
            setAddedItems((oldItems) => {
                return oldItems.filter((arrElem, index) => {
                    return index !== id;
            })
        })
    }; 
  return (
    <div className='main_div'>
          <div className='center_div'>
              <br />
              <h1>To Do List</h1>
              <br />
              <input type="text" placeholder="Add a items" value={inputText} onChange={writeItem}/>
              <button onClick={addItem}> + </button>

              <ul>
                      {addedItems.map( (itemsValue, indexNumber) => {
                          return <List key={indexNumber} id={indexNumber} itemsValue={itemsValue} deleteItem={ deleteItem}/>
                      })}
              </ul>
          </div>      
    </div>
    )
    
}
