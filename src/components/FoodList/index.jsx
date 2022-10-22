import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import FoodCard from "../FoodCard";
import addTocartAction from "../../store/action";

const FoodList = ({ foods }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  const addToCartHandler = (food) => {
    const foodId = cartItems.find((element) => element.id === food.id);
    if (foodId) return null;
    dispatch(addTocartAction({ cartItems: [food, ...cartItems] }));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: " calc(100vh - 72px)",
        paddingTop: "10px",
        backgroundColor: "#212121",
      }}
    >
      {foods.map((food) => (
        <div key={food.id}>
          <FoodCard
            foodName={food.name}
            foodDetail={food.detail}
            foodImg={food.image}
            foodId={food.id}
            addToCart={() => addToCartHandler(food)}
          />
        </div>
      ))}
    </div>
  );
};

export default FoodList;
