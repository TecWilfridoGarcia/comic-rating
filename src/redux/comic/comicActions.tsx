import axios from "axios";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./comicTypes";

const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

const fetchDataSuccess = (data: any) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

const fetchDataFailure = (error: any) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};


export const fetchData = (idComic:number) => {
  const url = `http://localhost:5000/getData/${idComic}`;
  return (dispatch: any) => {
    dispatch(fetchDataRequest());
    axios
      .get(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // response.data is the DATA
        const data = response.data;
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchDataFailure(error.message));
      });
  };
};
