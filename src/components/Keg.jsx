import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

function Keg(props) {
  const {
    kegName,
    message,
    kegBrand,
    id,
    pintQty,
    whenKegPintSaleClicked,
    whenKegClicked,
    disableButton,
  } = props;

  return (
    <React.Fragment>
      <div className="FlashCard coralColor">
        <div className="divAlign">
          <div className="divAlign1" onClick={() => whenKegClicked(id)}>
            <p><span className="black">Name: </span>{kegName}</p>
            <p><span className="black">Brand: </span>{kegBrand}</p>
            <p><span className="black">Pint Qty: </span>{pintQty}</p>
            <p>{message === "Almost Empty" ? (<span className="yellowColor">{message}</span>) : (<span className="redColor">{message}</span>)}</p>
          </div>
          <div className="buttonWidth">
            <button disabled={disableButton} className="btn btn-success button"onClick={() => whenKegPintSaleClicked(id)}>Sell</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  whenKegClicked: PropTypes.func,
  whenKegPintSaleClicked: PropTypes.func,
  kegName: PropTypes.string,
  kegBrand: PropTypes.string,
  message: PropTypes.string,
  id: PropTypes.string,
};

export default Keg;
