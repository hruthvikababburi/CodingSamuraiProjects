import React, { useState,useRef } from 'react'

export default function Task(props) {
   const  {eachTask,handleDeleteTask,handleSaveEdittedTask,handleCheckedTask} = props
   const [isEditMode,setIsEditMode] = useState(false)
   const [edittedText, setEdittedText] = useState(eachTask.task)
   const inputRef = useRef(null)

   const editTask=()=>{
    setIsEditMode(true)
    setTimeout(()=>{
        if (inputRef.current){
            inputRef.current.focus()
        }
    },0)
    
   }
   const handleEditText=(e)=>{
    setEdittedText(e.target.value)
   }
   const saveTask=()=>{
    handleSaveEdittedTask(eachTask.id,edittedText)
    setIsEditMode(false)

   }
   const deleteTask=()=>{
    handleDeleteTask(eachTask.id)
   }

   const handleChangeOfCheck=()=>{
    handleCheckedTask(eachTask.id,eachTask.isChecked)
   }

   





  return (
        <>
          {isEditMode ? (
            <div className='each-task-cont'>
                <div className='main-task-cont'>
                    <input type='checkbox' id='checkBox' className='check-box' checked={eachTask.isChecked}/>
                    <input htmlFor='checkbox' className='each-task-edit-mode' value={edittedText} onChange={handleEditText} ref={inputRef}/>
                </div>
                <div className='task-tools'>
                    <span className={`task-priority ${eachTask.priority.toLowerCase()}`}>{eachTask.priority}</span>
                    <div className=''>
                        <button className='edit-save-del-btn' onClick={saveTask}>save</button>
                        <button className='edit-save-del-btn' onClick={deleteTask}>delete</button>
                    </div>
                </div>
            </div>
          ): (
            <div className='each-task-cont'>
                <div className='main-task-cont'>
                    <input type='checkbox' id='checkBox' className='check-box' checked={eachTask.isChecked} onChange={handleChangeOfCheck}/>
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
