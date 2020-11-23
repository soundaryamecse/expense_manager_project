import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE } from "../actionTypes";
  
  export const initState = {
    isLoading: false,
    error: false,
    isAuth: false,
  };
  
  export default (state = initState, { type, payload }) => {
    console.log(type, payload);
    switch (type) {
      case USER_REGISTER_REQUEST:
        return {
            isLoading: true
        };
      case USER_REGISTER_SUCCESS:
        return {
            ...state,
            isLoading: false,
            isAuth: true,
            error: payload.error,
            message: payload.message
        };
      case USER_REGISTER_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: payload.error,
          message: payload.message 
        };
      default:
        return state;
    }
  };
  