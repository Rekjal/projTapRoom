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

  const { kegName, kegBrand, id, whenKegPintSaleClicked, whenKegClicked } = props;
  return (
    <React.Fragment>
      <div onClick={() => whenKegClicked(id)}>
        <h1> Key.jsx</h1>
        <h1>Name is {kegName}</h1>
        <p>
          <em>Brand is</em> <b>{kegBrand}</b>
        </p>
        <p>
          <em>id is</em> <b>{id}</b>
        </p>
      </div>
      <div>
        {/* <button onClick={() => {props.whenKegPintSaleClicked(props.id)}>Sell</button> */}
        <button onClick={() => whenKegPintSaleClicked(id)}>Sell</button>
        
        {/* <button onClick={props.onClickingEdit}>Update Keg</button>  */}
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
