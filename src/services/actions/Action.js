import {
  ADD_PRODUCT,
  DECREMENT,
  GET_LIST,
  INCREMENT,
  LOGIN,
  SELECTED_PRODUCT,
  SET_PRODUCTS,
} from "./Type";

const loginUser = (payload) => {
  return {
    type: LOGIN,
    payload: payload,
  };
};
export default loginUser;

export const addProduct = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload: payload,
  };
};
export const incNumber = (num) => {
  return {
    type: INCREMENT,
    payload: num,
  };
};
export const decNumber = (num) => {
  return {
    type: DECREMENT,
    payload: num,
  };
};

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProducts = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};
// export const removeSetProducts = (products) => {
//   return {
// type: REMOVE_SELECTED_PRODUCT,
//     payload: products,
//   };
// };
export const getList = (data) => {
  return {
    type: GET_LIST,
    payload: data,
  };
};
