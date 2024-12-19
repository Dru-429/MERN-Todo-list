import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {

    const [task,setTask] = useState()
    const addTask = () => {
        axios.post('http://localhost:3001/add', {task: task} )
        .then(resutl => console.log(resutl))
        .catch(err => console.log(err)) 
    }
    
    return (
        <div className='w-full '>
            <input
                type="text"
                id='task'
                placeholder='Enter Task...'
                value={task}
                onChange={() => setTask(e.target.value) }
                className='text-zinc-900 p-2 py-1 border-[1px]  rounded-2xl font-[400] w-[60%]'
            />
            <button
                className='bg-[#42f342] px-2 py-1 border-none cursor-pointer rounded-2xl w-[25%] text-zinc-900 font-semibold ml-3'
                id='add-task'
            onClick={addTask}
            >
                Add Task
            </button>
        </div>
    )
}

export default Create