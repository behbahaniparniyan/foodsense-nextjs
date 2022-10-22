import React, { useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import {
  Card,
  CardContent,
  CardMedia,
  Box,
  IconButton,
  Typography,
  Tooltip,
  AppBar,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import addTocartAction from "../../src/store/action";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const deleteHandler = (ItemId) => {
    const deleteItem = cartItems.filter(({ id }) => id !== ItemId);
    dispatch(addTocartAction({ cartItems: deleteItem }));
  };

  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price.slice(0, -1) * currentvalue.quantity;
  };
  const total = cartItems.reduce(addition, 0);

  return (
    <Box>
      <AppBar
        sx={{
          height: "72px",
          backgroundColor: "#F8F8F8",
          display: "flex",
          justifyContent: "center",
          paddingLeft: "10px",
          paddingTop: 0,
          position: "sticky",
        }}
      >
        <Link href={"/"}>
          <Tooltip title="Home">
            <ArrowBackIcon
              style={{ color: "#212121", cursor: "pointer" }}
              fontSize="large"
            />
          </Tooltip>
        </Link>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // height: "100vh",
          backgroundColor: "#212121",
          minHeight: "calc(100vh - 72px)",
          // overflowY: "scroll",
          backgroundColor: "#212121",
        }}
      >
        {cartItems.map((item) => (
          <Card
            style={{
              width: "80%",
              height: "250px",
              display: "flex",
              backgroundColor: "#e1e1e1",
              margin: "10px",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
            key={item.id}
          >
            <Box style={{ display: "flex" }}>
              <CardMedia
                component="img"
                height="250"
                image={item.image}
                alt="food image"
                style={{ width: "250px", objectFit: "container" }}
              />
              <Box>
                <CardContent>
                  <Typography variant="h5">{item.name}</Typography>
                  <Typography variant="h6">Price: {item.price}</Typography>
                </CardContent>
              </Box>
            </Box>

            <Box
              onClick={() => deleteHandler(item.id)}
              style={{ cursor: "pointer" }}
            >
              <ClearIcon />
            </Box>
          </Card>
        ))}
        <Box
          style={{
            backgroundColor: "#1976D2",
            width: "80%",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {total > 0 ? (
            <Typography variant="h5">Total: {`${total} $`}</Typography>
          ) : (
            "The shopping cart is empty"
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
