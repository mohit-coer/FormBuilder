import {
  SAVE_REQUEST,
  SAVE_SUCCESS,
  SAVE_FAILURE
} from "./actions";
import axios from 'axios';
import { toast } from 'react-toastify';

export const saveRequest = () => {
    return {
      type: SAVE_REQUEST,
    };
  };
  
  export const saveSuccess = () => {
    return {
      type: SAVE_SUCCESS,
    };
  };
  
  export const saveFailure = () => {
    return {
      type: SAVE_FAILURE,
    };
  };
  
  export const saveQues = (questions) => {
    debugger;
    return (dispatch) => {
      const data = {
        questions: questions
      };
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };
      dispatch(saveRequest());
      axios
        .post("http://localhost:8081/api/questions/add", data, {
          headers: headers,
        })
        .then((response) => {
          const users = response.data;
          dispatch(saveSuccess(users));
          toast.dark("Saved in Database, Waah bete mauj kardi");
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(saveFailure(errorMsg));
        });
    };
  };