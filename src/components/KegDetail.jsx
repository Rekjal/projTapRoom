import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete } = props;
  console.log("Inside KegDetail.jsx");
  console.dir(keg.kegBrand);
  return (
    <React.Fragment>
       <h1> KeyDetail.jsx</h1>
      <h1>Keg Details for {keg.kegName} </h1>
      <p>
        <em>Brand is</em> <b>{keg.kegBrand}</b>
      </p>
      <p>
        <em>Price is</em> <b>${keg.kegPrice}</b>
      </p>
      <p>
        <em>Flavor is</em> <b>{keg.kegFlavor}</b>
      </p>
      <p>
        <em>Pint Quantity is</em> <b>{keg.pintQty}</b>
      </p>
      <p>
        <em>Key is</em> <b>{keg.id}</b>
      </p>

      <button onClick={props.onClickingEdit}>Update Keg</button> 
      {/* When "Update Keg" button is clicked, STATE of "editing" is mutated (set to TRUE) in KegControl.jsx */}
      <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;
