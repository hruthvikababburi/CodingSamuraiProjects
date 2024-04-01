import React from 'react'
import { IoIosSearch } from "react-icons/io";

export default function Main() {
  return (
    <div className='main-comp'>
        <div className='heading-cont'>
            <img src='https://www.freeiconspng.com/uploads/tasks-icon-33.png' alt='logo' className='logo'/>
            <h1 className='heading'>Task Manager</h1>
        </div>
         <form className='form-el'>
            <div className='input-divs'>
                <label htmlFor='taskEl'>Enter Task:</label>
                <input type='text' id='taskEl' placeholder='Ex: Completing Assignments, etc.' className='task-el'/>
            </div>
            <div className='input-divs'>
                <label htmlFor='priorityEl'>Set Priority:</label>
                <select id='priorityEl' className='priority-el'>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
            </div>
            <button type='submit' className='add-btn'>Add</button>
         </form>
         <div className='tasks-list-heading-cont'>
            <h2 className='tasks-list-heading'>Your Tasks</h2>
         </div>
    </div>
  )
}
