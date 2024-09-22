import React, { useEffect, useState } from 'react'

import Todos from './components/Todos'
import Search from './components/Search'
/*useEffect is for all work before render components ||
 render when value change in [] called "watch dependencies";*/

const App = () => {
const [todos,setTodo] = useState([])


 const fetchTodo = async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
    setTodo(data);
 }

  useEffect(() => {
    fetchTodo();
  },[])

  

  return (<section className="w-1/2 mx-auto">
        <Search todos={todos} setTodo={setTodo} />
    <div>
    <p className='text-right mt-5 font-medium'>total todos - {todos.length}</p>
    {
    todos.length ? <div className='grid grid-cols-2 gap-3 mt-6 '>
          {todos.map(todo =>(
            <Todos todo={todo} key={todo.id} />
            ))} </div> 
    : (<p className='text-medium text-red-600 text-center'>There is no todos!</p>)
    }
    </div>
  </section>)
}

export default App
