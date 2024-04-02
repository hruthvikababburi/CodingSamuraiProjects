import React, { useState } from 'react'

export default function Task(props) {
   const  {eachTask,handleDeleteTask} = props
   const [isEditMode,setIsEditMode] = useState(false)
   const editTask=()=>{
   }
   const deleteTask=()=>{
    handleDeleteTask(eachTask.id)
   }
  return (
        <>
          {isEditMode ? (
            <div className='each-task-cont'>
                <div className='main-task-cont'>
                    <input type='checkbox' id='checkBox' className='check-box' checked={eachTask.isChecked}/>
                    <label htmlFor='checkbox' className='each-task'>{eachTask.task}</label>
                </div>
                <div className='task-tools'>
                    <span className={`task-priority ${eachTask.priority.toLowerCase()}`}>{eachTask.priority}</span>
                    <div className=''>
                        <button className='edit-save-del-btn' onClick={editTask}>edit</button>
                        <button className='edit-save-del-btn' onClick={deleteTask}>delete</button>
                    </div>
                </div>
            </div>
          ): (
            <div className='each-task-cont'>
                <div className='main-task-cont'>
                    <input type='checkbox' id='checkBox' className='check-box' checked={eachTask.isChecked}/>
                    <label htmlFor='checkbox' className='each-task'>{eachTask.task}</label>
                </div>
                <div className='task-tools'>
                    <span className={`task-priority ${eachTask.priority.toLowerCase()}`}>{eachTask.priority}</span>
                    <div className=''>
                        <button className='edit-save-del-btn' onClick={editTask}>edit</button>
                        <button className='edit-save-del-btn' onClick={deleteTask}>delete</button>
                    </div>
                </div>
            </div>
          )}
        </>
  )
}
