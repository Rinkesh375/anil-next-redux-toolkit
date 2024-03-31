"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const UsersLists = () => {
    const users = useSelector(store=>store.userReducer.users)
    console.log(users)
  return (
    <div>UsersLists</div>
  )
}

export default UsersLists