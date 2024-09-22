import React, { useState } from 'react'



const Search = ({todos,setTodo}) => {
    const [searchKey,setSearchKey] = useState("");

    const searchTodos =()=>{
        const filteredTodo = todos.filter(todo => todo.title.includes(searchKey.toLowerCase()))
        setTodo(filteredTodo);
        setSearchKey("");
    }

  return (
    <div>
        <h1 className='text-5xl font-bold text-center my-4 uppercase'>React Exercise</h1>
        <input type="text" className='border-2 border-black focus:none rounded p-1 w-3/4'
        onChange={(e)=> setSearchKey(e.target.value)} value={searchKey}/>

        <button className='bg-black text-white p-2 rounded ms-3 text-sm' 
        onClick={searchTodos}>search</button>
    </div>
  )
}

export default Search