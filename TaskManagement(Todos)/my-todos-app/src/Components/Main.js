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
            <div className='tasks-list-modifying-elements-cont'>
                <form className='form-2'>
                    <div className='search-cont'>
                        <input type='text' className='search-bar' placeholder='Search for tasks'/>
                        <IoIosSearch className='search-icon' color='#084047'/>
                    </div>
                    <div className='sort-tasks-cont'>
                        <label htmlFor='sortTasks' className='sort-label'>Sort Tasks:</label>
                        <select id='sortTasks' className='sort-el'>
                            <option value='High-Low'>High-Low</option>
                            <option value='Low-High'>Low-High</option>
                        </select>
                    </div>
                   
                    


                </form>
            </div>
         </div>
            <form className='form-3-filter-tasks-small '>
                <h2 className='filter-heading'>Filter Tasks: </h2>
                <div>
                    <input type='radio' value='All Tasks' name='Task_Status' id='allTasks' className='radio-inputs'/>
                    <label className='filter-labels' htmlFor='allTasks'>All Tasks</label>
                </div>
                <div>
                    <input type='radio' value='Completed Tasks' name='Task_Status' id='completed' className='radio-inputs'/>
                    <label className='filter-labels' htmlFor='completed'>Complete Tasks</label>
                </div>
                <div>
                    <input type='radio' value='All Tasks' name='Task_Status' id='pending' className='radio-inputs'/>
                    <label className='filter-labels' htmlFor='pending'>Pending Tasks</label>
                </div>
                </form>
         <div className='tasks-and-filter-cont'>
            <div className='tasks-list-cont'>
                <div className='each-task-cont'>
                    <div className='main-task-cont'>
                        <input type='checkbox' id='checkBox' className='check-box'/>
                        <label htmlFor='checkbox' className='each-task'>Task 1 ffff fffffffffff ffffff fffffffffffffff ffffff f f    fffffffffffff fffffffff fffff fffffff </label>
                    </div>
                    <div className='task-tools'>
                        <span className='task-priority high'>High</span>
                        <button className='edit-save-del-btn'>edit</button>
                        <button className='edit-save-del-btn'>delete</button>
                    </div>
                </div>
                <div className='each-task-cont'>
                    <div className='main-task-cont'>
                        <input type='checkbox' id='checkBox' className='check-box'/>
                        <label htmlFor='checkbox' className='each-task'>Task 1</label>
                    </div>
                    
                    <div className='task-tools'>
                        <span className='task-priority low'>Low</span>  
                        <button className='edit-save-del-btn'>edit</button>
                        <button className='edit-save-del-btn'>delete</button>
                    </div>
                </div>
                <div className='each-task-cont'>
                    <div className='main-task-cont'>
                        <input type='checkbox' id='checkBox' className='check-box'/>
                        <label htmlFor='checkbox' className='each-task'>Task 1</label>
                    </div>
                    
                    <div className='task-tools'>
                        <span className='task-priority medium'>Medium</span>
                        <button className='edit-save-del-btn'>edit</button>
                        <button className='edit-save-del-btn'>delete</button>
                    </div>
                </div>
            </div>

            <form className='form-3-filter-tasks-md'>
                <h2 className='filter-heading'>Filter Tasks: </h2>
                <div>
                    <input type='radio' value='All Tasks' name='Task_Status' id='allTasks' className='radio-inputs'/>
                    <label className='filter-labels' htmlFor='allTasks'>All Tasks</label>
                </div>
                <div>
                    <input type='radio' value='Completed Tasks' name='Task_Status' id='completed' className='radio-inputs'/>
                    <label className='filter-labels' htmlFor='completed'>Complete Tasks</label>
                </div>
                <div>
                    <input type='radio' value='All Tasks' name='Task_Status' id='pending' className='radio-inputs'/>
                    <label className='filter-labels' htmlFor='pending'>Pending Tasks</label>
                </div>
            </form>
         </div>
    </div>
  )
}
