import axios from 'axios'
import {TRANSACTION_REQUEST,TRANSACTION_SUCCESS,TRANSACTION_FAILURE} from "../actionTypes"

export const transactionRequest = () => ({
    type : TRANSACTION_REQUEST
})

export const transactionSuccess = ( payload ) => ({
    type : TRANSACTION_SUCCESS,
    payload
})

export const transactionFailure = ( payload ) => ({
    type : TRANSACTION_FAILURE,
    payload
})

export const getTransactionData = ( payload ) => dispatch => {
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