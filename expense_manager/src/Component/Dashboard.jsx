import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import {Link,useHistory} from 'react-router-dom' 
import {getTransactionData} from '../Redux/actions/dashboardAction'
import {logout} from "../Redux/actions/loginAction"
import DashboardItems from '../Component/DashboardItems'




function DashBoard() {
  const dispatch = useDispatch()
  // const transactionDetails = useSelector( state => state.dashboard.transactionDetails)
  const history = useHistory()  
  const userData = useSelector( state => state.login.userData)
  const user_id = useSelector( state => state.login.user_id)
  console.log(userData)
  React.useEffect(()=>{
    dispatch(getTransactionData(user_id))
  })
  const handleLogout=()=>{
    dispatch(logout())
    history.push("/login")
  }

  
    return (
      <>
      <nav class="navbar navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" style={{alignItems:"flex-start"}}></span>
        </button>
        <div style={{color:"white"}}>Welcome {userData[0].name}</div>
      </nav> 
      <div className="row" style={{height:"1000px"}}>           
      <div className="col-2 collapse" id="navbarToggleExternalContent"  style={{background:"#212121"}}>
        <div className="row" style={{color:"white" ,marginLeft:"30px"}}>
          <Link to="/dashboard"><div className="col-12" style={{paddingTop:"30px"}}>DashBoard</div></Link>
          <Link to="/ledger"><div className="col-12" style={{padding:"30px"}}>Ledger</div></Link>
          <button className="btn border-0 btn-danger ml-2" onClick={handleLogout}>LOGOUT</button>
        </div>
      </div>
            <div className="col-10">
                <DashboardItems/> 
            </div>
        </div>
      </>
    );
}


export default DashBoard;