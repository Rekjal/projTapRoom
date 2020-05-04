import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  console.log("Inside KegList.jsx");
  console.dir(props.kegList);
  return (
  
    <React.Fragment>
      <hr />
      <h1> KeyList.jsx</h1>
      {props.kegList.map((keg) => (  // Loop through the master list passed down from KegControl.jsx call in turn pass each to Keg.jsx
        <Keg
          whenKegClicked={props.onKegSelection}
          whenKegPintSaleClicked={props.onKegSelectPintSale}
          kegName={keg.kegName}
          kegBrand={keg.kegBrand}
          // kegPrice={keg.kegPrice}
          // kegFlavor={keg.kegFlavor}
          // kegQty={keg.kegQty}
          id={keg.id}
          key={keg.id}
        />
      ))}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelectPintSale: PropTypes.func,
  onKegSelection: PropTypes.func
};

export default KegList;
