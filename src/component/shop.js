import React from "react";
import { useDispatch } from "react-redux";
// import { bindActionCreators } from 'redux';
import { actionCreators } from "../state/index";
import { bindActionCreators } from "redux";

const Shop = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  // const {withdrawMoney, depositMoney} = blindActionCreator(actionCreators, dispatch);  we just deconstruct this more.
  return (
    <div>
      <h2> Deposit/WithdrawMoney</h2>

       {/* without using the bindActionCreators */}
      {/* <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(actionCreators.withdrawMoney(100));
        }}
      >
        -
      </button>
       Update Balanece
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(actionCreators.depositMoney(100));
        }}
      >
        +
      </button> */}

      {/* withusing bindActionCreators */}

      <button
        className="btn btn-primary"
        onClick={() => {
          actions.withdrawMoney(100);
        }}
      >
        -
      </button>
       Update Balanece
      <button
        className="btn btn-primary"
        onClick={() => {
          actions.depositMoney(100);
        }}
      >
        +
      </button>

    </div>
  );
};

export default Shop;
