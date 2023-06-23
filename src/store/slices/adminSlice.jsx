import {createSlice} from '@reduxjs/toolkit'

const adminSlice = createSlice({
    name: "admin",
    initialState: [],
    reducers: {
        addAdmin(state,action){
            return [...state,action.payload];
        },
        removeAdmin(state,action){
            console.log("Del adm req:" , action.payload);
            return state.filter((curr)=>curr!=action.payload)
        },
        deleteAllAdmin(state,action){
         console.log("Del all admin req");
         return []
        },
    }
})

export const {addAdmin, removeAdmin, deleteAllAdmin} = adminSlice.actions;
export default adminSlice.reducer;



