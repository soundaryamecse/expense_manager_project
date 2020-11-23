import React, { useState } from 'react'
import Styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import { addTransaction } from '../Redux/actions/addTransactionAction'
import { getTransactionData } from '../Redux/actions/dashboardAction'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });



const ModalWrapper = Styled.div ` 
    display:flex;
    flex-direction:row-reverse;
      .modalbtn {  
       height:100px;
        width:100px;
        border-radius :50% ;     
        border :1px solid #1B5E20;
        background : #A5D6A7;
        color:white;
      }
      .modalbtn:hover{
        background : #1B5E20;
      }
`

const CalculatorWrapper = Styled.div`
    display:flex;
    justify-content:space-around;
    margin-top : 100px;
    margin-left:10%;
`

const Calculator = Styled.div`
    height : min-height;
    width : 500px;
    padding : 30px;
    padding-bottom :30px;
    background : ${props => props.color ? props.color : null};
    color : white;
    font-size : 20px;  
    display : flex;
    flex-direction : row;
    align-items:flex-end;
    justify-content : space-between;
    margin-right:10px; 

    .iconPart{
        position:relative;
        top:30px;
        left:-20px;
    }
`

function DashboardItems()
{
    const [ amountType, setAmountType ] = useState('')
    const [ title, setTitle ] = useState('')
    const [ amount, setAmount ] = useState(0)
    const classes = useStyles();
    const last5Transaction = useSelector( state => state.dashboard.transactionDetails)
    const totalBalance = useSelector( state => state.dashboard.totalBalance)
    const totalExpenses = useSelector( state => state.dashboard.totalExpenses)
    const totalIncome = useSelector( state => state.dashboard.totalIncome)
    const user_id = useSelector( state => state.login.user_id)
    const dispatch = useDispatch()
    console.log(totalBalance, totalExpenses, totalIncome, last5Transaction)

    
    const handleTitleChange = (e)=>{
        setTitle(e.target.value)
    }

    const handleAmountType = (e)=>{
        setAmountType(e.target.value)
    }

    const handleAmount=(e)=>{
        setAmount(e.target.value)
    }

    const handleAddTransaction = ()=>{
        let date = new Date().toLocaleString();
        console.log(date, title, amountType, amount, user_id)
        let payload = {
            user_id: user_id,
            title: title,
            type: amountType,
            amount: Number(amount),
            timestamp: date
        }
        dispatch(addTransaction(payload))
        setTimeout(()=> dispatch(getTransactionData(user_id)), 500)
    }
    return(
        <>
            <CalculatorWrapper>
                    <Calculator color="#D81B60">
                        <div className="iconPart"><i class="fas fa-project-diagram" style={{fontSize:100,opacity:"0.1"}}></i></div>
                        <div className="d-flex flex-column">
                            <div style={{textAlign:"right",fontSize:40}}>{totalExpenses}₹</div>
                            <div style={{fontSize:15}}>Total-Expense</div>
                        </div>
                    </Calculator>
                    <Calculator color="#00ACC1">
                        <div className="iconPart"><i className="fas fa-plus-circle" style={{fontSize:100,opacity:"0.1"}}></i></div>
                        <div className="d-flex flex-column">
                            <div style={{textAlign:"right",fontSize:40}}>{totalIncome}₹</div>
                            <div style={{fontSize:15}}>Total-Income</div>
                        </div>
                    </Calculator>
                    <Calculator color="#1E88E5">
                     <div className="iconPart"><i class="fas fa-rupee-sign" style={{fontSize:100,opacity:"0.1"}}></i></div>
                        <div className="d-flex flex-column">
                            <div  style={{textAlign:"right",fontSize:40}}>{totalBalance}₹</div>
                            <div style={{fontSize:15}}>Total-Balance</div>
                        </div>
                    </Calculator>
                </CalculatorWrapper>
            <ModalWrapper>
                <div style={{flexDirection:"column",margin:"30px"}}>            

              

                    <div  className="text-center" style={{fontSize:"30px",fontWeight:"bolder",lineHeight:2}}>To add<br/> Expense/Income <br/>click Below</div>
                    {/* <!-- Button trigger modal --> */}
                    <div className="text-center"><i class="fas fa-long-arrow-alt-down" style={{fontSize:"80px",fontWeight:"bolder"}}></i></div>
                       <div  className="text-center"> <button type="button" class="btn modalbtn" data-toggle="modal" data-target="#exampleModal">
                        <i class="fas fa-plus" style={{fontSize:"50px"}}></i>
                        </button></div>
                </div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                    <div className="d-none d-lg-block" style={{lineHeight:3,fontWeight:"bolder",fontSize:30}}>
                        LAST FIVE TRANSACTION
                    </div>
                    <div className="d-none d-lg-block">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">Reason For transaction</StyledTableCell>
                                    <StyledTableCell align="center">Type of transaction</StyledTableCell>
                                    <StyledTableCell align="center">Amount</StyledTableCell>
                                    <StyledTableCell align="center">Date and Time</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {last5Transaction && last5Transaction.map((data) => (
                                    <StyledTableRow key={data.id}>                            
                                        <StyledTableCell align="center">{data.title}</StyledTableCell>
                                        <StyledTableCell align="center">{data.amount}</StyledTableCell>
                                        <StyledTableCell align="center">{data.type}</StyledTableCell>
                                        <StyledTableCell align="center">{data.timestamp}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </TableContainer>
                    </div>
                </div>
                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Expense Manager</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    {/* <label for="exampleInputPassword1">Password</label> */}
                                    <input 
                                        type="text"
                                         class="form-control"
                                          id="exampleInputPassword1"
                                          placeholder="Title"
                                          onChange={handleTitleChange}
                                          />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Type of Transaction</label>
                                    <select class="form-control" id="exampleFormControlSelect1" onChange={handleAmountType}>
                                        <option selected>Select Amount Type</option>
                                        <option value="debit">Debit</option>
                                        <option value="credit">Credit</option>                                        
                                    </select>
                                </div>
                                <div class="form-group">
                                    {/* <label for="exampleInputPassword1">Password</label> */}
                                    <input 
                                        type="number"
                                         class="form-control"
                                          id="exampleInputPassword1"
                                          placeholder="Amount"
                                          onChange={handleAmount}
                                          />
                                </div>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal"  onClick={handleAddTransaction}>Add Transaction</button>
                            </div>
                        </div>
                        </div>
                    </div>

                </ModalWrapper>
        </>
    )
    
}

export default DashboardItems