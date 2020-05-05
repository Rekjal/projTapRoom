import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";
import './FlashCard.css';

function KegList(props) {
  // console.log("Inside KegList.jsx");
  //console.dir(props.kegList);
  const { kegList, onKegSelectPintSale, onKegSelection, onAlertMessage } = props;
  return (
  
    <React.Fragment>
      {/* <hr /> */}
      {/* <h1> KeyList.jsx</h1> */}
      {kegList.map((keg) => (  // Loop through the master list passed down from KegControl.jsx call in turn pass each to Keg.jsx
        <Keg whenKegClicked={onKegSelection}
          whenKegPintSaleClicked={onKegSelectPintSale}
          message={onAlertMessage}
          kegName={keg.kegName}
          kegBrand={keg.kegBrand}
          id={keg.id}
          key={keg.id}  //needed
          pintQty={keg.pintQty}
          
        />
      ))}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelectPintSale: PropTypes.func,
  onKegSelection: PropTypes.func,
  onAlertMessage: PropTypes.string
};

export default KegList;
