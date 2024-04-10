import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { IoIosSearch } from "react-icons/io";
import Task from './Task';

export default function Main() {
  const [tasksList,setTasksList] = useState(
    JSON.parse(localStorage.getItem('tasksList'))||[]
  );

  useEffect(
    ()=>{
        localStorage.setItem('tasksList',JSON.stringify(tasksList))
    },[tasksList]
  )

  const [taskText,setTaskText] = useState('')
  const [taskPriority,setTaskPriority] = useState('High')
  const [sortingOption,setSortingOption] = useState('High-Low')

  const handleTaskTextChange=(e)=>{
    setTaskText(e.target.value)
  }

  const handleTaskPriorityChange=(e)=>{
    setTaskPriority(e.target.value)
  }

  const handleTaskAddition=(e)=>{
    e.preventDefault();

    if(taskText.trim() === ''){
        alert('Enter valid task to add!')
    }
    else{
        const newTask = {
            id: uuidv4(),
            task: taskText,
            priority: taskPriority,
            isChecked: false
        }
        setTasksList((pre)=>{
            return [...pre,newTask]
        })
        setTaskText('');
        setTaskPriority('High');
      }
  }

  const handleDeleteTask = (id)=>{
    const newList = tasksList.filter((eachTask)=> eachTask.id !== id)
    setTasksList(newList)
  }

  const handleSaveEdittedTask=(id,newText)=>{
    const updatedTasksList = tasksList.map((eachTask)=>{
        if (eachTask.id === id){
            eachTask.task = newText
            return {...eachTask, task: newText}
        }
        return eachTask
    })
    setTasksList(updatedTasksList)
  }

  const handleCheckedTask =(id,checkStatus)=>{
    console.log('is changing',id, checkStatus)
    const updatedTasksListOnChecks = tasksList.map((eachTask)=>{
        if (eachTask.id === id){
            return {...eachTask, isChecked: !checkStatus}
        }
        return eachTask
    })
    setTasksList(updatedTasksListOnChecks)
  }

  const handleSortingChange=(e)=>{
    setSortingOption(e.target.value)
    let updatedSortedList = []
    const HighSorted = tasksList.filter(eachTask=> eachTask.priority === 'High')
    const LowSorted = tasksList.filter(eachTask=> eachTask.priority === 'Low')
    const MediumSorted = tasksList.filter(eachTask=> eachTask.priority === 'Medium')

    if(e.target.value === 'High-Low'){
        updatedSortedList = [...HighSorted,...MediumSorted,...LowSorted]
    }
    else{
        updatedSortedList = [...LowSorted,...MediumSorted,...HighSorted]
    }
    setTasksList(updatedSortedList)
  }
  

  
  

  return (
    <div className='main-comp'>
        <div className='heading-cont'>
            <img src='https://www.freeiconspng.com/uploads/tasks-icon-33.png' alt='logo' className='logo'/>
            <h1 className='heading'>Task Manager</h1>
        </div>
         <form className='form-el' onSubmit={handleTaskAddition}>
            <div className='input-divs'>
                <label htmlFor='taskEl'>Enter Task:</label>
                <input type='text' id='taskEl' placeholder='Ex: Completing Assignments, etc.' className='task-el' onChange={handleTaskTextChange} value={taskText}/>
            </div>
            <div className='input-divs'>
                <label htmlFor='priorityEl'>Set Priority:</label>
                <select id='priorityEl' className='priority-el' onChange={handleTaskPriorityChange} value={taskPriority}>
                    <option value='High'>High</option>
                    <option value='Medium'>Medium</option>
                    <option value='Low'>Low</option>
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
                        <select id='sortTasks' className='sort-el' value={sortingOption} onChange={handleSortingChange}>
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
                {tasksList.map((eachTask)=>{
                    return(
                        <Task key={eachTask.id} eachTask={eachTask} handleDeleteTask={handleDeleteTask} handleSaveEdittedTask={handleSaveEdittedTask} handleCheckedTask={handleCheckedTask}/>
                    )
                    
                })}
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
