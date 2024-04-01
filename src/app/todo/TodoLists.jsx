"use client"
import React from 'react'
import { useSelector } from 'react-redux';

const TodoLists = () => {
    const todos = useSelector(store=>store.todoReducer.todos);
 
  return (
    <>
    
    <div>Todo Lists</div>
     <table border={1}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Task</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {todos.map(({id,task,status})=><tr key={id}>
                <td>{id}</td>
                <td>{task}</td>
                <td>{status?"Completed":"Uncompleted"}</td>
            </tr>)}
        </tbody>
     </table>
   
    </>
  )
}

export default TodoLists