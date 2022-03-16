import React, { useState } from 'react'
import './tasks.css'
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa'

function Tasks() {
    const [item, setItem] = useState('')
    const [tasks, setTasks] = useState([])

    const renderList = () => {
        if (item) {
            setTasks(currentList => [...currentList, { task: item, id: new Date().getTime().toString() }])
            setItem('')
        }
    }

    const removeTask = (id) => {
        setTasks(currentList => {
            return currentList.filter(item => item.id !== id)
        })
    }

    return (
        <section className='tasks-container'>
            <form className='tasks-form'>
                <input 
                 type='text' 
                 placeholder='Add task...'
                 value={item}
                 onChange={(e) => setItem(e.target.value)} 
                />
                <button type='button' onClick={renderList}>
                    Add task
                </button>
            </form>

            <ul className='task-list'>
                {tasks.map(item => {
                    return <SingleTask key={item.id} {...item} removeTask={removeTask} />
                })}
            </ul>
        </section>
    )
}

const SingleTask = ({ id, task, removeTask }) => {
    const [isDone, setIsDone] = useState(false)

    return (
        <li className='task-item' key={id}>
            <button type='button' className={`check-btn ${isDone && 'btn-done'}`} onClick={() => setIsDone(!isDone)}>
                <FaCheckCircle />
            </button>  
            <p className={`${isDone ? 'text-done' : null}`}>{task}</p>
            <button type='button' className='delete-btn' onClick={() => removeTask(id)}>
                <FaTrashAlt />
            </button>
        </li>
    )
}

export default Tasks