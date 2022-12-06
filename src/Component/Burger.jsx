import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Burger = () => {
  const stateBurger = useSelector((state) => state.burger);
  const stateMenu = useSelector((state) => state.menu);
  const dispatch = useDispatch()
  console.log(stateMenu, stateBurger);
  return (
    <div className="container">
        <h2 className="text-center">Bài tập Burger</h2>
      <div className="row">
        <div className="col-6">
          <div className="burger-left">
            <div className="breadTop"></div>
            <div className="salad"></div>
            <div className="beef"></div>
            <div className="cheese"></div>
            <div className="breadBottom"></div>
          </div>
        </div>
        <div className="col-6">
            <div className="burger-right">
            <table className="table">
        
            </table>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
