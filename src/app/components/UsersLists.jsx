"use client"
import { useDispatch,useSelector } from 'react-redux';
import { removeUser } from '../redux/userSlice';

const UsersLists = () => {
    const users = useSelector(store=>store.userReducer.users);
    const dispatch = useDispatch();
     
  return (
    <>
    
    <div>UsersLists</div>

    <div>
       <div className='flex flex-col h-[100px] border border-[red] overflow-y-scroll'>
       {users.map(({name,id})=><div key={id} className='flex w-[20%] justify-between'>
       <p >{name}</p>
       <button onClick={()=>dispatch(removeUser(id))}>Delete</button>
       </div>)}
       </div>
    </div>
    </>
  )
}

export default UsersLists