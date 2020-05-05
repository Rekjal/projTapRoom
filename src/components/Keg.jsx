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
  console.log("INside KEGT.JSX; Message is ");
  console.log({message});
  return (
    <React.Fragment>
      <div onClick={() => whenKegClicked(id)} className="FlashCard coralColor">
        <div className="divAlign">
          {/* <p>  <em>Name is</em> <b>{kegName}</b>       </p> <br></br> */}
          <p>
            <span className="black">Name: </span>{kegName}>
          </p>
          <p>
            <span className="black">Brand: </span>{kegBrand}
          </p>
          <p>
            <span className="black">Pint Qty: </span>{pintQty}        
           {message}
           

          </p>
        </div>
        <br></br>

        {/* <div> */}
        <button
          className="btn btn-success button"
          onClick={() => whenKegPintSaleClicked(id)}
        >
          Sell
        </button>
        {/* </div> */}
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
