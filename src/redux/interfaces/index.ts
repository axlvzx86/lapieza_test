import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from '../actions/actionsTypes';
  
  export interface IUser {
    id: 0,
    name: "joel",
    username: "",
    email: "",
    adress: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
            lat: "",
            lng: ""
        }
    },
    phone: "",
    website: "",
    company: {
        name: "",
        catchPhrase: "",
        bs: ""
    }
  }
  
  export interface UserState {
    pending: boolean;
    users: IUser[];
    error: string | null;
  }
  
  export interface UserSuccessPayload {
    users: IUser[];
  }
  
  export interface UserFailurePayload {
    error: string;
  }
  
  export interface UserRequest {
    type: typeof USER_REQUEST;
  }
  
  export type UserSuccess = {
    type: typeof USER_SUCCESS;
    payload: UserSuccessPayload;
  };
  
  export type UserFailure = {
    type: typeof USER_FAILURE;
    payload: UserFailurePayload;
  };
  
  export type UserActions =
    | UserRequest
    | UserSuccess
    | UserFailure;