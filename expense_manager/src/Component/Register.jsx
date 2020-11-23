import React from "react";
import { connect } from "react-redux";
import axios from 'axios'
import { userRegister } from "../Redux/actions/registerAction";
import { validEmail } from './emailValidation'
import Styled from 'styled-components'
import {Link} from 'react-router-dom'

const RegisterWrapper = Styled.div`

        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        content: "";
        opacity: 1;
        background: linear-gradient(
                        rgba(20,20,20, .5), 
                        rgba(20,20,20, .5)),
                        url( https://c8.alamy.com/comp/2BEJC53/computer-at-productive-home-workplace-using-computers-and-gadgets-to-work-or-study-from-home-online-education-and-distance-learning-homeschooling-2BEJC53.jpg);
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;

    .register{
        display:flex;
        flex-direction:column;     
        margin:auto;
        border:1px solid grey;
        background:white;
        width:300px;
        height:400px; 
        margin-top:100px;
        padding:10px;
        padding-right : 40px;
        div,h4{
            text-align:center;
        }
       
    }

    .img{
        display:flex;
        justify-content:center;
        height:130px;
        background:white;
        opacity:0.8;

}
   
    h1{
        color:white;
        text-align:center;
    }
    input{
        padding:10px;
        margin:10px;
        margin-left:40px;
        border-radius:5px;
        border:1px solid grey;
    }
    .button{
        background : #3949AB;
        color:white;
    }
    .button:hover {
        background : #7CB342;
    }
`
// const BackgroundImageWrapper = Styled.div` 
       
// `

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
          [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = this.state;

        if(name.length > 3 && validEmail(email) && password.length > 5 ) {
            axios
            .get('https://guarded-cove-82318.herokuapp.com/usersData')
            .then(res=>{
                let userData = res.data
                let isValid = true
                for(let i = 0; i < userData.length; i++){
                    if(userData[i].email === email){
                        alert('Already Exist')
                        isValid = false
                    }
                }
                if(isValid){
                        let payload = {
                            name: name,
                            email: email,
                            password: password
                
                        }
                        this.props.registerRequest(payload);
                    }
            })
        }else{
            alert("Fill all Details")
        }
    }
   

    render(){
        const { name, email, password } = this.state;
        return(
            
            
            <RegisterWrapper>
                <div class="img">
                    <img src = "http://www.expense-manager.in/assets/img/Expmng-Logo.png" height="80px" width="200px" alt="logo"/>
                </div>                
                <div>
                    <h1>REGISTER AN ACCOUNT</h1>
                    <hr width="50px"/>
                </div>
                <div className="register">
                    <h4>Sign Up</h4>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <input type="text" name="name" value={name} placeholder="name" onChange={this.handleChange}   />
                        </div>
                        <div>
                            <input onChange={this.handleChange} name="email" placeholder="email" type="text" value={email} />
                        </div>
                        <div>
                            <input onChange={this.handleChange} name="password" placeholder="password" type="password" value={password} />
                        </div>
                        <small className="text-muted ml-5 ">already Registered kindly 
                        <Link to="/login">SignIn</Link></small>
                        <div>
                            <input  className="button border-0" value="submit" type="submit" />
                        </div>
                </form>
                <div className="align-center"><Link to="/"><button className="btn btn-danger border-0 p-2 ml-4">Back to home</button></Link></div>

                </div>
            </RegisterWrapper>
      
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.register.isAuth,
    error: state.register.error,
    isLoading: state.register.isLoading,
    message: state.register.message
  });
  
  const mapDispatchToProps = (dispatch) => ({
    registerRequest: (payload) => dispatch(userRegister(payload))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Register)