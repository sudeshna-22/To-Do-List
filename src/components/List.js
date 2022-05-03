import React from 'react'

export default function List({ id, itemsValue, deleteItem }) {

    return (
        <>
            <div className='todo_style'>
                <li>{itemsValue}</li>
                <button onClick={() => {
                    deleteItem(id);
                }}> X </button>
        </div>
        </>
    )

}
