  import axios from 'axios'
  import {LEDGER_TRANSACTION_REQUEST, LEDGER_TRANSACTION_SUCCESS, LEDGER_TRANSACTION_FAILURE, AMOUNT_TYPE, PAGE_CHANGE} from "../actionTypes"
  
  export const transactionRequest = () => ({
      type : LEDGER_TRANSACTION_REQUEST
  })
  
  export const transactionSuccess = ( payload ) => ({
      type : LEDGER_TRANSACTION_SUCCESS,
      payload
  })
  
  export const transactionFailure = ( payload ) => ({
      type : LEDGER_TRANSACTION_FAILURE,
      payload
  })
  
  export const getTransactionDataLedger = ( payload ) => dispatch => {
      console.log(payload)
      dispatch( transactionRequest() )
      return axios.get("https://guarded-cove-82318.herokuapp.com/transactions",{
        params:{
            user_id : Number(payload)
        }
    })
      
      // .then(res=>console.log(res))
      .then(res => dispatch(transactionSuccess(res.data)))
      .catch(err => dispatch(transactionFailure(err)))
  }

  export const amountTypeChange = (payload) => ({
    type: AMOUNT_TYPE,
    payload
  });

  export const pageChange = (payload) => ({
    type: PAGE_CHANGE,
    payload
  });