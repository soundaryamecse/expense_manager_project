import {LEDGER_TRANSACTION_REQUEST, LEDGER_TRANSACTION_SUCCESS, LEDGER_TRANSACTION_FAILURE, AMOUNT_TYPE, PAGE_CHANGE} from "../actionTypes"

const initState = {
    transactionIsLoading : false ,
    transactionDetails : [],
    transactionIsError : false,
    amountType:'all',
    totalData: 0,
    page: 1
}

const ledgerReducer = (state=initState ,{type,payload} )=>
{
    switch(type){
        case LEDGER_TRANSACTION_REQUEST : 
            return{
                ...state,
                transactionIsLoading : true
            }
        case LEDGER_TRANSACTION_SUCCESS :
          if(state.amountType === 'all'){
            let initialStart = (Number(state.page) - 1)*3
            let finalStart = Number(state.page)*3
            let paginationData = payload.slice(initialStart, finalStart)
              return {
                ...state,
                transactionIsLoading : false,
                transactionDetails : paginationData,
                totalData: payload.length,
                transactionIsError :false
            }
          }
          else{
            let transaction = payload.filter(e=>e.type === state.amountType)
            let initialStart = (Number(state.page) - 1)*3
            let finalStart = Number(state.page)*3
            let paginationData = transaction.slice(initialStart, finalStart)
            return {
              ...state,
              transactionIsLoading : false,
              transactionDetails : paginationData,
              totalData: transaction.length,
              transactionIsError :false
          }
        }

        case LEDGER_TRANSACTION_FAILURE :
            return {
                ...state,
                transactionIsLoading : false,
                transactionIsError : true
            }
        case AMOUNT_TYPE:
          return{
            ...state,
            amountType: payload
          }
        case PAGE_CHANGE:
          return{
            ...state,
            page:payload
          }
        default :
            return{
                ...state
            }
        

    }
}

export default ledgerReducer