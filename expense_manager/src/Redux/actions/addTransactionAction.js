import axios from "axios";
import { ADD_TRANSACTION } from "../actionTypes";

export const addTransactionRequest = () => ({
    type: ADD_TRANSACTION.REQUEST
  });
  
export const addTransactionSuccess = (payload) => (
    {
    type: ADD_TRANSACTION.SUCCESS,
    payload
  });
  
export const addTransactionFailure = (payload) => ({
    type: ADD_TRANSACTION.FAILURE,
    payload
  });


export const addTransaction = (payload) => (dispatch) => {
    dispatch(addTransactionRequest());
    axios
      .post("https://guarded-cove-82318.herokuapp.com/transactions", payload)
      .then((res) => {
          if(res.status === 200){
            const { error, message } = res.data
            dispatch(addTransactionSuccess({error, message}));
          }
          else if(res.status === 401){
            const { error, message } = res.data
            dispatch(addTransactionFailure({error, message}));
          }

      })
      .catch((err) => {
        dispatch(addTransactionFailure(err));
      });
  };