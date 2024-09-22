import React from 'react'

const Todos = ({todo}) => {
  return (
    <div className='bg-black text-white p-3 rounded cursor-pointer'>
    <h3>Title - {todo.title}</h3>
    <p>Status -{todo.completed ? "Finished" : "Unfinished"}</p>
    </div>
  )
}

export default Todos