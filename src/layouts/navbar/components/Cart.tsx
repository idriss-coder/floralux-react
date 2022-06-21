/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
import React from "react";
import "./Cart.scss"
// eslint-disable-next-line import/no-unresolved
import {ShoppingBasketOutlined} from "@mui/icons-material"
// eslint-disable-next-line import/no-unresolved
import BoxIcon from "../../../components/boxIcon/BoxIcon";

function Cart() {
  const handleShowCart = () => {}
  return <BoxIcon handleClick={handleShowCart}>
    <ShoppingBasketOutlined />
  </BoxIcon>;
}

export default Cart;
