import { SET_CARTITEM } from "./actionType";

const addToCart = (payload) => {
  return {
    type: SET_CARTITEM,
    payload: payload,
  };
};

export default addToCart;
