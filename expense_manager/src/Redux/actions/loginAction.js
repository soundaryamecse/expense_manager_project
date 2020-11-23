import axios from "axios";
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE,LOGOUT } from "../actionTypes";


export const userLoginRequest = () => ({
    type: USER_LOGIN_REQUEST
  });
  
  export const userLoginSuccess = (payload) => ({
    type: USER_LOGIN_SUCCESS,
    payload
  });
  
  export const userLoginFailure = (payload) => ({
    type: USER_LOGIN_FAILURE,
    payload
  }); 
  
  export const logout = () => ({
      type: LOGOUT
  })

  export const userLogin = (payload) => (dispatch) => {   
    dispatch(userLoginRequest())
    return  axios.get("https://guarded-cove-82318.herokuapp.com/usersData",{
      params:{
       email : payload.email,
       password :payload.password
      }
    })
    // .then(res=>console.log(res.data))
      .then(res=>dispatch(userLoginSuccess(res.data)))
      .catch(err =>dispatch(userLoginFailure(err)))
      //   let userData = res.data
      //   let isValidation = false
      //   let message = "Account Doesnot Exist"
      //   for(let i = 0; i < userData.length; i++){
      //       if(userData[i].email === payload.email){
      //           if(userData[i].password === payload.password){
      //               isValidation = true
      //               message = "Login Success"
      //               user_id = userData[i].id
      //           }
      //           else{
      //               isValidation = false
      //               message = "Wrong Password"  
      //           }
      //       }
      //   }
      //   dispatch(userLoginSuccess({user_id : user_id , isAuth: isValidation, message: message}))
      //   })
      // .catch((err) => {
      //   dispatch(userLoginFailure(err));
      
  }

//   export const userLogin = (payload) => (dispatch) => {
//     console.log(payload)
//     dispatch(userLoginRequest());
//     axios
//       .get("http://localhost:3000/usersData", payload)
//       .then(res=>{
//         let userData = res.data
//         let isValidation = false
//         let message = "Account Doesnot Exist"
//         for(let i = 0; i < userData.length; i++){
//             if(userData[i].email === payload.email){
//                 if(userData[i].password === payload.password){
//                     isValidation = true
//                     message = "Login Success"
//                 }
//                 else{
//                     isValidation = false
//                     message = "Wrong Password"  
//                 }
//             }
//         }
//         dispatch(userLoginSuccess({isAuth: isValidation, message: message}))
//         })
//       .catch((err) => {
//         dispatch(userLoginFailure(err));
//       });
 // };


