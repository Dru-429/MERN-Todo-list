import React, { useState } from 'react'
import Create from './Create'

const Home = () => {

    const [todo, setTodo] = useState([])

    return (
        <div className='w-full min-h-screen text-lg text-zinc-100 '>
            {/* //Header */}
            <div className='w-full h-20 border-b-[1px] border-zinc-700 bg-zinc-900 px-2 py-5 text-center rounded-b-2xl'>
                <h1 className='text-3xl font-bold font-mono tracking-tighter text-[#42f342]'>To-Do List</h1>
            </div>

            <div className='flex justify-center items-start pt-20'>
                <div className='w-full md:w-1/3 bg-zinc-800 text-center'>
                    <Create />
                    {
                        todo.length === 0 ?
                            <h2>No Record :( </h2>
                            :
                            todo.map(currTodo => {

                            })
                    }
                </div>

            </div>
        </div>
    )
}

export default Home