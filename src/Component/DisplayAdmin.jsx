import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../store/slices/userSlice';
import { removeAdmin } from '../store/slices/adminSlice';
// import {AiTwotoneDelete} from 'react-icons/fa'

const DisplayAdmin = () => {
    const dispatch = useDispatch();
    const data=useSelector((state)=>state.admins)
    const deleteHandler = (curr) => {
        console.log("Del Req2: " , curr);
        dispatch(removeAdmin(curr))
    }

  return (
    <div>
        {data.map((curr, idx)=>{
            return <li style={{height:"5vh", color:"black",margin:"10px",fontSize:"3rem"}} key={idx}>{curr} <button style={{backgroundColor:"red",color:"white",borderRadius:"3px",padding:"2px", cursor:"pointer"}} onClick={()=>deleteHandler(curr)}>Delete</button></li>
        })}
    </div>
  )
}

export default DisplayAdmin