"use client"
import React from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/userSlice';


const AddUsers = () => {
    const dispatch = useDispatch();
    const handleFormSubmit = (event)=>{
       event.preventDefault();
       const form  = new FormData(event.target);
       const name = form.get("userName");
       dispatch(addUser(name))
    }
  return (
    <form onSubmit={handleFormSubmit} className='flex flex-col justify-center items-center'>
      <input type="text" name='userName' required className='border border-[red]' />
       <button type="submit">Add User</button>
    </form>
  )
}

export default AddUsers