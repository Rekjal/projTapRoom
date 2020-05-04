import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  // const myStyledComponentStyles = {
  //   backgroundColor: "#ecf0f1",
  //   fontFamily: "sans-serif",
  //   paddingTop: "50px",
  // };
  //style={myStyledComponentStyles}
  //  console.log("Inside Keg.jsx");
  //  console.dir(props.whenKegClicked(props.id));

  // function handlePintSale(event) {
  //   event.preventDefault();
  //   props.onEditKeg(
  //      {kegQty: event.target.kegQty.value,
  //       id: event.target.id.value});
  // }
  // function whenKegPinSellClickedFunction(event) {
  //   event.preventDefault();
  //   // console.log(event.target.kegName.value);
  //   // console.log(event.target.kegBrand.value);
  //   // console.log(event.target.kegPrice.value);
  //   // console.log(event.target.kegFlavor.value);
  //   // console.log(event.target.kegQty.value);
  //   props.whenKegPintSaleClicked({
  //     kegName: event.target.kegName.value,
  //     kegBrand: event.target.kegBrand.value,
  //     kegPrice: event.target.kegPrice.value,
  //     kegFlavor: event.target.kegFlavor.value,
  //     id: event.target.id.value,
  //     pintQty: event.target.pintQty.value
  //   });
  //   }

  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h1> Key.jsx</h1>
        <h1>Name is {props.kegName}</h1>
        <p>
          <em>Brand is</em> <b>{props.kegBrand}</b>
        </p>
        <p>
          <em>id is</em> <b>{props.id}</b>
        </p>
      </div>
      <div>
             <button onClick={props.whenKegPintSaleClicked}>Sell</button>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  whenKegClicked: PropTypes.func,
  whenKegPintSaleClicked: PropTypes.func,
  kegName: PropTypes.string,
  kegBrand: PropTypes.string,
  // kegPrice: PropTypes.string,
  // kegFlavor: PropTypes.string,
  // kegQty: PropTypes.string,
  id: PropTypes.string,
  // key: PropTypes.string
};

export default Keg;
