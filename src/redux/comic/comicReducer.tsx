import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./comicTypes";

const initialState = {
  loading: false,
  comic: {},
  error: "",
  count: 0
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        comic: action.payload,
        error: "",
      };
    case FETCH_DATA_FAILURE:
      return {
        loading: false,
        comic: {},
        error: action.payload,
      };
     
    default:
      return state;
  }
};

export default reducer;
