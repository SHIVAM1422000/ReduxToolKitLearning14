import { configureStore } from '@reduxjs/toolkit'
import  usersSlice  from './slices/userSlice'
import adminSlice from './slices/adminSlice'

const store = configureStore({
    reducer:{
        users:usersSlice,
        admins:adminSlice
    },
})

export default store
