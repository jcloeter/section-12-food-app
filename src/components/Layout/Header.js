import React, { Fragment } from "react";
import image from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
        {/* <button>Cart</button> */}
      </header>
      <div className={classes["main-image"]}>
        <img alt="table of food" src={image} />
      </div>
    </Fragment>
  );
};

export default Header;
