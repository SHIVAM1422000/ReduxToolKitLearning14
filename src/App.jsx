import './App.css'
import Navbar from './Component/Navbar'
import AdminDetails from './Component/adminDetails'
import UserDetails from './Component/userDetails'
function App() {


  return (
    <>
 <Navbar/>
 <div style={{display:"flex",flexDirection:"column"}}>
<UserDetails/>
<AdminDetails/>
 </div>
    </>
  )
}

export default App
