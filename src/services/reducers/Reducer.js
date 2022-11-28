import {
  DECREMENT,
  GET_LIST,
  INCREMENT,
  LOGIN,
  SET_PRODUCTS,
} from "../actions/Type";

const iState = { data: { name: "", password: "" } };

export const loginReducer = (state = iState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,

        data: action.payload,
      };

    default:
      return state;
  }
};

export const changeTheNumber = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const initialState = {
  products: [
    {
      id: 1,
      title: "rb",
      category: "programmer",
    },
  ],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

export const getListReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_LIST:
      return { ...state, payload };

    default:
      return state;
  }
};
