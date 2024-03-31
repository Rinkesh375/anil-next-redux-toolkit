import { createSlice,nanoid } from "@reduxjs/toolkit";

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
            }
        }
    }
);

export const {addUser} = userSlice.actions
export default userSlice.reducer