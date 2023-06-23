import { fakeUserData } from "../api/userData";
import styled from "styled-components";
import {useDispatch} from "react-redux"

import DisplayUser from "./DisplayUser";
import DisplayAdmin from "./DisplayAdmin";
import { addAdmin, deleteAllAdmin } from "../store/slices/adminSlice";


const AdminDetails = () => {
  
  const dispatch = useDispatch();

  const addNewUser = async() => {
    const newUser = await fakeUserData();
    dispatch(addAdmin(newUser));
  }

  const deleteAllUserAdminHandler = () => {
    const req = prompt("Sure To Remove All users",'ok');
    console.log("from prompte" , req);
    if(req) dispatch(deleteAllAdmin(""));
  }

  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of Admin Details</div>
          <button className="btn add-btn" onClick={addNewUser} style={{cursor:"pointer"}}>Add New Admin</button>
        </div>
        <ul>
         <DisplayAdmin/>
        </ul>
        <hr />
         <button style={{color:"white",backgroundColor:"black", borderRadius:"3px",height:"6vh",width:"10vw"}} onClick={deleteAllUserAdminHandler}>DeleteAllAdmin</button>;
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default AdminDetails;