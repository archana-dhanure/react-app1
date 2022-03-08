import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";
import { useParams } from "react-router-dom";
function ItemContainer(props) {
  const { id: id1, name, age } = useParams();

  return (
    <div>
      <h2>Item - {props.item}</h2>
      <h3>
        recieved param
        <br /> {id1} name: {name} age: {age}{" "}
      </h3>

      <div>
        <button onClick={props.buyItem}>Buy Items</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
