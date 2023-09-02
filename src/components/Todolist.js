import React from 'react'
import props from 'prop-types';
function Todolist(props) {
    return (
      <li className="list-item">
          {props.item}
          <span className='icons'>
          <i className="fa-solid fa-trash-can icon-delete" 
          onClick={e=>{
              props.deleteItem(props.index)
          }}></i>
          </span>
      </li>
    )
  }
  
  export default Todolist