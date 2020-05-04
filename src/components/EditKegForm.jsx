import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm (props) {
const { keg } = props;
 

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg(
       {kegName: event.target.kegName.value,
        kegBrand: event.target.kegBrand.value,
        kegPrice: event.target.kegPrice.value,
        kegFlavor: event.target.kegFlavor.value,
        pintQty: keg.pintQty,
        id: keg.id
      });
        // key:event.target.key.value});
  }

  return (
    <React.Fragment>
       <h1> EditKegForm.jsx</h1>
      <ReusableForm formSubmissionHandler={handleEditKegFormSubmission} buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
};

export default EditKegForm;