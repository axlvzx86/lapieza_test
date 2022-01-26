import {
    USER_REQUEST,
    USER_FAILURE,
    USER_SUCCESS,
  } from '../actions/actionsTypes';
  import {
    UserRequest,
    UserSuccess,
    UserSuccessPayload,
    UserFailure,
    UserFailurePayload,
  } from '../interfaces';

  export const userRequest = (): UserRequest => ({
    type: USER_REQUEST,
  });
  
  export const userSuccess = (
    payload: UserSuccessPayload
  ): UserSuccess => ({
    type: USER_SUCCESS,
    payload,
  });
  
  export const userFailure = (
    payload: UserFailurePayload
  ): UserFailure => ({
    type: USER_FAILURE,
    payload,
  });