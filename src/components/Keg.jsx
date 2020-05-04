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



  return (
    <React.Fragment>
       <h1> Key.jsx</h1>
      <div onClick = {() => props.whenKegClicked(props.id)}>  
        <h1>Name is {props.kegName}</h1>
        <p>
          <em>Brand is</em> <b>{props.kegBrand}</b>
        </p>
        <p>
          <em>id is</em> <b>{props.id}</b>
        </p>      
       
      </div>
      <button onClick={props.whenKegPintSaleClicked}>Sell</button>
    </React.Fragment>
  );
}

Keg.propTypes = {
  whenKegClicked: PropTypes.func,
  kegName: PropTypes.string,
  kegBrand: PropTypes.string,
  // kegPrice: PropTypes.string,
  // kegFlavor: PropTypes.string,
  // kegQty: PropTypes.string,
   id: PropTypes.string,
  // key: PropTypes.string
};

export default Keg;
