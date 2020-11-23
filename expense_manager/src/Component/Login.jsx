import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { userLogin } from "../Redux/actions/loginAction";
import Styled from 'styled-components'
import {Link} from 'react-router-dom'

const LoginWrapper=Styled.div`
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

      .login{
            display:flex;
            flex-direction:column;     
            margin:auto;
            border:1px solid grey;
            background:white;
            width:300px;
            height:350px; 
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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if(email.length > 0 && password.length > 0){
      let payload = {
        "email" : email,
        "password" : password
    }
    this.props.loginRequest(payload);
    }else{
      alert("Fill all Details")
    }
  };
  render() {
    const { email, password } = this.state;
    const { isAuth, isLoading, error, userData} = this.props;
    console.log(isAuth, isLoading,error, userData);

    if (!isAuth)
      return (
        <LoginWrapper>
          <div class="img">
                  <img src = "http://www.expense-manager.in/assets/img/Expmng-Logo.png" height="80px" width="200px" alt="logo"/>
            </div>
            <div>
                  <h1>LOGIN ACCOUNT</h1>
                  <hr width="50px"/>
            </div>
          <div className="login">
                    <h4>Sign In</h4>
              <form onSubmit={this.onSubmit}>
                <div>
                  <input
                    onChange={this.handleChange}
                    name="email"
                    placeholder="email"
                    type="text"
                    value={email}
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    onChange={this.handleChange}
                    name="password"
                    placeholder="password"
                    type="password"
                    value={password}
                    password="Password"
                  />
                </div>
                <small className="text-muted ml-5 ">Not Registered kindly 
                <Link to="/register">SignUp</Link></small>
                <div>
                  <input value="submit" type="submit" className="btn btn-primary border-0" />
                </div>
              </form>
              <div className="align-center"><Link to="/"><button className="btn btn-danger border-0 p-2 ml-4">Back to home</button></Link></div>
              {isLoading && "...loading"}          
              {
                  !isAuth && error  && <div style={{textAlign:"center",color:"red"}}>Invalid Credentials pls try Again !!!</div>
              }
            </div>
         
        </LoginWrapper>
      );
    else {
      return ( 
          <Redirect to="/dashboard"/>     
      )
    }
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.login.isAuth,
  error: state.login.error,
  isLoading: state.login.isLoading,
  profile: state.login.profile,
  userData : state.login.userData
});

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (payload) => dispatch(userLogin(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);


