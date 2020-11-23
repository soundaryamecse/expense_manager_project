import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Styled from 'styled-components'
import Footer from './Footer'
import Features from './Features'

const HomeWrapper=Styled.div`
    justify-content:space-around;
    padding:10px;
    width:100%;
    position : fixed;
    top:-2px;
    z-index:20;
    background:${(props)=>props.height<300?  "rgb(0,0,0)" : "white"};
    background: ${(props)=>props.height<300? "rgba(0,0,0, 0.4)" : "white"};    
    color:${(props)=>props.height<300? "white" : "grey"};
    display:flex;
    img{
        margin-left:100px;
        margin-top:10px;
    }
  
    span{
        font-size : 10px;
        margin-left : 15px;
        justify-content : center;
    }
    ul li{
        display : inline-block; 
        
    }
    li{
        margin-left:50px;
        padding-top:15px;
    }
    li:hover{       
        color : orange;
    }
    button{
        color:${(props)=>props.height<300? "white" : "grey"};
        border:${(props)=>props.height<300? "1px solid white" : "1px solid grey"};
        margin-top:4px;
        padding:10px;        
        background:${(props)=>props.height<300?  "rgb(0,0,0)" : "white"};
        background: ${(props)=>props.height<300? "rgba(0,0,0, 0.4)" : "white"};  
    }

    button:hover{
       color : orange;
       border:1px solid orange;
    }
    .flex{
        display:flex;
        flex-direction:row;
    }
`

const BackgroundWrapper=Styled.div`
   z-index:1
   margin-right:10px
  img{
        width:100%;
      height:800px;  
    }
`
const MiddleWrapper=Styled.div`
    position:relative;
    top:-500px;
    z-index:15;
    text-align:center;
    color:white;
    font-size:40px;
    font-weight:lighter;
    p{
        font-size : 30px;
        line-height : 20px;
    }
    button{
        background:transparent;
        border:1px solid white;
        color:white;
        padding : 10px;
        font-size : 20px;
    }
   
`
const AboutWebsiteContentWrapper=Styled.div`
    position:relative;
    top:-200px;
    left:230px;
    text-align:center;
    color:#212121;
    font-size:18px;
    width:900px;
    


`

function Home(){
    let [position,setPosition] =useState( window.pageYOffset)
    setInterval(()=>{
        setPosition(window.pageYOffset)
    },500)
    console.log(position)
    return(
        <div>
            <HomeWrapper height={position}>
                <div><img src="http://www.expense-manager.in/assets/img/Expmng-Logo.png" alt="logo" height="50px" width="160px" /></div>
              
                <div>
                    <ul>
                        <li>HOME <span>o</span></li>
                        <a href="#features"><li>FEATURES <span>o</span></li></a>
                        <a href="#website"><li>ABOUT US <span>o</span></li></a>
                        <li>CONTACT</li>
                    </ul>
                </div>
                <Link to="/login"><button>LOGIN</button></Link>
                <Link to="/register"><button>REGISTER</button></Link>
                {/* <Link to="/ledger"><button>LEDGER</button></Link> */}
              
            </HomeWrapper>
            <BackgroundWrapper>
                <img src="http://www.expense-manager.in/assets/img/bg/img1.jpg" alt="landing page" height="800px" width="100%"/>   
            </BackgroundWrapper>
            <MiddleWrapper>
                <hr width="500px" />
                <div>		&#65121;{"            "}We track your Daily Expenses{"             "}	&#65121;</div>
                <hr width="500px" />
                <p>Manage  Your Expense Directly on Website.</p>
                <p>Easily Keep Track of Finances</p>
                <hr width="100px"/>
                <button>Learn More</button>
            </MiddleWrapper>
            <AboutWebsiteContentWrapper>
                <div id="website">
                    <h1 >ABOUT WEBSITE</h1>
                    <hr width="100px"/>
                    <div>
                        How to track your expenses successfully? We know that it’s easy. You only need to add each expense you do… no more than that!
                        And Expense Manager is going to help you.This website allows you to record your expenses easily. Optionally you can assign a category to your expense in order to get detailed statistics and helpful insights.
                        Expense Manager is simple, intuitive, stable and feature-rich website that is just designed for you.
                        Just add new transactions when you are buying a coffee or taking a taxi or whenever do a transactions. It’s done in one click, because you just need to fill few field with expense/income amount. It is so quick and enjoyable!
                    </div>
                </div>
            </AboutWebsiteContentWrapper>
            <Features/>
            <Footer/>
        </div>
    )
}

export default Home