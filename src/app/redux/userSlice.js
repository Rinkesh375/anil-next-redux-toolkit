import { createSlice,nanoid,current } from "@reduxjs/toolkit";

const initialState = {
    users:[]
}

const userSlice = createSlice(
    {
        name:"user",
        initialState,
        reducers:{
            addUser:(state,action)=>{
               
                state.users.push({id:nanoid(),name:action.payload})
                console.log(current(state)) //This way we can access the state of this reducer
            },
            removeUser:(state,action)=>{
                state.users = state.users.filter(({id})=> id !== action.payload)
            }
        }
    }
);

export const {addUser,removeUser} = userSlice.actions
export default userSlice.reducer