import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <h1>ReusableForm.jsx</h1>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="kegName" placeholder="Enter Keg Name" />
        <input type="text" name="kegBrand" placeholder="Enter Keg Brand" />
        <input type="number" name="kegPrice" placeholder="Enter Keg Price" />
        <input type="text" name="kegFlavor" placeholder="Enter Keg Flavor" />
        {/* <input type="text" name="kegQty" placeholder="Enter Quantity" /> */}
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
