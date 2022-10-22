import React, { Fragment } from "react";
import {useSelector} from "react-redux";


import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Badge, IconButton, Link, Tooltip } from "@mui/material";


import style from "./style.module.css";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <nav className={style.navbar}>
      <h1>Food Sense</h1>
      <Link href="/cart">
      <Tooltip title="Cart">
      <IconButton>
        <Badge badgeContent={cartItems.length} color="primary">
          <ShoppingCartIcon color="action" />
        </Badge>
      </IconButton>
      </Tooltip>
      </Link>
    </nav>
  );
};

export default Navbar;
