"use client"
import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'


const TodoInput = () => {
    const dispatch = useDispatch();
    const handleFormSubmit = (event)=>{
      event.preventDefault();
      const form = new FormData(event.target);
      const task = form.get("task");
       dispatch(addTodo({task,status:false}))
    }
  return (
    <form onSubmit={handleFormSubmit} className='flex flex-col justify-center items-center'>
      <input type="text" name='task' required className='border border-[red]' />
      
       <button type="submit">Add Todo</button>
    </form>
  )
}

export default TodoInput


