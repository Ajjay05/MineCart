import { GET_LIST } from "./actionTypes";
import { ADD_ITEM } from "./actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST":
      const { payload } = action;
      return {
        ...state,
        productList: payload
      };

    case "ADD_ITEM": {
      const {
        itemName,
        vendorName,
        itemPrice,
        itemImage
      } = action.payload;

      return {
        ...state,
        productList: {
          ...state.productList,
          data: [
            ...state.productList.data,
            {
              productName: itemName,
              vendorName: vendorName,
              price: itemPrice,
              img: itemImage
            }
          ]
        }
      };
    }

    case "DELETE_ITEM": {
    
      const updatedData = state.productList.data.filter((val, index) => {
        return index !== action.payload;
      });

  

      return {
        ...state,
        productList: {
          ...state.productList,
          data: updatedData
        }
      };
    }

    case "VENDOR_SEARCH":{

      const updatedData = state.productList.data.filter((val, index) => {
        return val?.vendorName === action.payload;
      });  
      return {
        ...state,
        productList: {
          ...state.productList,
          data: updatedData
        }
      };
      
    }

    case "TYPE_SEARCH":{
      const updatedData = state.productList.data.filter((val, index) => {
        return val?.catName === action.payload;
      });  
      return {
        ...state,
        productList: {
          ...state.productList,
          data: updatedData
        }
      };
    }

    default:
      return state;
  }
};
export default reducer;
