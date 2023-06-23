import {createSlice} from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state,action){
            return [...state,action.payload];
        },
        removeUser(state,action){
            console.log("Del req:" , action.payload);
            return state.filter((curr)=>curr!=action.payload)
        },
        deleteAllUser(state,action){
         console.log("Del all req");
         return []
        },
    }
})

export const {addUser, removeUser, deleteAllUser} = usersSlice.actions;
export default usersSlice.reducer;



