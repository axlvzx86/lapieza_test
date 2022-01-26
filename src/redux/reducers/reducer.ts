import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from '../actions/actionsTypes';
import { UserActions, UserState} from '../interfaces';

const initialState: UserState = {
    pending: false,
    users: [],
    error: null,
  };
  
  export default (state = initialState, action: UserActions) => {
    switch (action.type) {
      case USER_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case USER_SUCCESS:
        return {
          ...state,
          pending: false,
          users: action.payload.users,
          error: null,
        };
      case USER_FAILURE:
        return {
          ...state,
          pending: false,
          users: [],
          error: action.payload.error,
        };
      default:
        return {
          ...state,
        };
    }
  };