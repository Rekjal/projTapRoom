import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete } = props;
  return (
    <React.Fragment>
      <div > 
        {/* className="KegDetail" */}
        {/* <h1> KeGDetail.jsx</h1> */}
        <h3>Keg Details: {keg.kegName} </h3>
        <p>Brand: {keg.kegBrand}</p>
        <p>Price: ${keg.kegPrice}</p>
        <p>Flavor: {keg.kegFlavor}</p>
        <p>Pint Quantity: {keg.pintQty}</p>
        <p>Key: {keg.id}</p>
        <br></br>
        <button onClick={props.onClickingEdit}>Update Keg</button>
        {/* When "Update Keg" button is clicked, STATE of "editing" is mutated (set to TRUE) in KegControl.jsx */}
        <br></br>
        <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
        <hr />
      </div>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default KegDetail;
