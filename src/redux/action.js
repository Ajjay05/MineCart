import { ADD_ITEM, GET_LIST, DELETE_ITEM , VENDOR_SEARCH, TYPE_SEARCH} from "./actionTypes";
import { list } from "./api";


export const getListAction = () => {
  return async (dispatch) => {
    const data = await list();
    // dispatch(getListDataaction(data));
    dispatch(getListDataaction(data));

    // return data;
  };
};

export const getListDataaction = (data) => {
  return {
    type: GET_LIST,
    payload: data
  };
};

export const addItems = (items) => {

  return {
    type: ADD_ITEM,
    payload: items
  };
};

export const deleteData = (index) => {
  return {
    type: DELETE_ITEM,
    payload: index
  };
};

export const vendorSearch=(value)=>{
  return{
    type:VENDOR_SEARCH,
payload:value
  }
}

export const typeSearch=(value)=>{
  return{
    type:TYPE_SEARCH,
payload:value
  }
}

