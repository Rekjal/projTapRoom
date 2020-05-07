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
  } = props;

  // const myStyledComponentStyles = {
  //   backgroundColor: '#ecf0f1',
  //   fontFamily: 'sans-serif',
  //   paddingTop: '50px'
  // }
  console.log("INSIDE KEGT.JSX:::::kegName:kegBrand:id:pintQty:message");
  console.dir({ kegName });
  console.dir({ kegBrand });
  console.dir({ id });
  console.dir({ pintQty });
  console.dir({ message });
  // var messageText;

  return (
    <React.Fragment>
      <div className="FlashCard coralColor">
        <div className="divAlign">
          <div className="divAlign1" onClick={() => whenKegClicked(id)}>         
            <p> <span className="black">Name: </span>{kegName}</p>
            <p><span className="black">Brand: </span>{kegBrand}</p>
            <p><span className="black">Pint Qty: </span>{pintQty}</p>
            <p>{message === "Almost Empty" ? (<div className="yellowColor">{message}</div>) : (<div className="redColor">{message}</div>)}</p>
          </div>
             
          <div className ="buttonWidth">
            <button className="btn btn-success button" onClick={() => whenKegPintSaleClicked(id)}>Sell</button>
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
