import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { amountTypeChange, getTransactionDataLedger, pageChange } from '../Redux/actions/ledgerAction'
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
      minWidth: 800,
    },
  });

function LedgerItems() {
    const classes =useStyles()
    const transactionsData = useSelector(state => state.ledger.transactionDetails)
    const totalData = useSelector(state => state.ledger.totalData)
    const user_id = useSelector(state => state.login.user_id)
    console.log(transactionsData, totalData)
    const dispatch = useDispatch()
    const [pageNo, setPageNo] = useState(1)
    useEffect(() => {
        dispatch(getTransactionDataLedger(user_id))
    }, [])

    const handleSetAmountType = (amountType) => {
        setPageNo(1)
        dispatch(amountTypeChange(amountType))
        setTimeout(() => dispatch(getTransactionDataLedger(user_id)), 500)
    }

    const handlePageChange = (page) => {
        setPageNo(page)
        dispatch(pageChange(page))
        setTimeout(() => dispatch(getTransactionDataLedger(user_id)), 500)
    }
    const buttons = Math.ceil(totalData / 3)
    return (
        <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h3>TRANSACTION DETAILS</h3>
            <div>
                <button className="btn btn-primary m-2" onClick={() => handleSetAmountType('all')}>ALL</button>
                <button className="btn btn-primary m-2"onClick={() => handleSetAmountType('debit')} >DEBIT</button>
                <button className="btn btn-primary m-2" onClick={() => handleSetAmountType('credit')}>CREDIT</button>
            </div>
            <div>
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
                        {transactionsData && transactionsData.map((data) => (
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
            <div className="d-flex justify-content-center">
                {
                    buttons && buttons > 0 ?
                        <div className="row py-2">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                    {
                                        pageNo <= 1 ?
                                            <li className="page-item disabled">
                                                <p className="page-link" tabindex="-1"> First</p>
                                            </li>
                                            :
                                            <li className="page-item" onClick={() => handlePageChange(1)}>
                                                <p className="page-link">First</p>
                                            </li>
                                    }
                                    {
                                        pageNo <= 1 ?
                                            <li className="page-item disabled">
                                                <p className="page-link" tabindex="-1">Previous</p>
                                            </li>
                                            :
                                            <li className="page-item" onClick={() => handlePageChange(pageNo - 1)}>
                                                <p className="page-link">Previous</p>
                                            </li>
                                    }

                                    <li className="page-item active" onClick={() => handlePageChange(pageNo)}><p className="page-link" >{pageNo}</p></li>
                                    {
                                        pageNo <= buttons - 1 ?
                                            <li className="page-item" onClick={() => handlePageChange(pageNo + 1)}><p className="page-link" >{pageNo + 1}</p></li>
                                            :
                                            null
                                    }
                                    {
                                        pageNo <= buttons - 2 ?
                                            <li className="page-item" onClick={() => handlePageChange(pageNo + 2)}><p className="page-link" >{pageNo + 2}</p></li>
                                            :
                                            null
                                    }
                                    {
                                        pageNo >= buttons ?
                                            <li className="page-item disabled">
                                                <p onClick={() => handlePageChange(pageNo + 1)} className="page-link">Next</p>
                                            </li>
                                            :
                                            <li className="page-item">
                                                <p onClick={() => handlePageChange(pageNo + 1)} className="page-link">Next</p>
                                            </li>
                                    }
                                    {
                                        pageNo <= buttons && pageNo >= buttons - 2 ?
                                            <li className="page-item disabled">
                                                <p className="page-link">Last</p>
                                            </li>
                                            :
                                            <li className="page-item">
                                                <p onClick={() => handlePageChange(buttons - 2)} className="page-link">Last</p>
                                            </li>
                                    }
                                </ul>
                            </nav>
                        </div>
                        :
                        null
                }
            </div>
        </div>
        </div>
    )
}

export default LedgerItems