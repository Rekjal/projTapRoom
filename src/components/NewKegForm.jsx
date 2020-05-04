import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types"; //import PropTypes
import ReusableForm from "./ReusableForm";

function NewKegForm(props) {
  // return (
  //     <React.Fragment>
  //      <h1>Empty NewKegForm </h1>
  //      </React.Fragment>
  // );

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    // console.log(event.target.kegName.value);
    // console.log(event.target.kegBrand.value);
    // console.log(event.target.kegPrice.value);
    // console.log(event.target.kegFlavor.value);
    // console.log(event.target.kegQty.value);
    props.onNewKegCreation({
      kegName: event.target.kegName.value,
      kegBrand: event.target.kegBrand.value,
      kegPrice: event.target.kegPrice.value,
      kegFlavor: event.target.kegFlavor.value,
      pintQty: 124,
      // kegQty: event.target.kegQty.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
       <h1> NewKegForm.jsx</h1>
        <ReusableForm formSubmissionHandler={handleNewKegFormSubmission} buttonText="Add New Keg!" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
};

export default NewKegForm;
