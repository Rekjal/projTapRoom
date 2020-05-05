import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formToRender: false, //Local State
      masterKegList: [], //Shared State (passed down to KegList.jsx and from there to Keg.jsx)
      selectedKeg: null, //Shared State (passed down to KegDetail.jsx and EditKegForm.jsx )
      sellPint: false,
      editing: false,
      //pintsRemaining: 0
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formToRender: false,
        selectedKeg: null,
        sellPint: false,  // needed?
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formToRender: !prevState.formToRender,
      }));
    }
  };

  handleAddingNewKegToList = (newKeg) => { //Adding new ticket involves Mutating state of SHARED STATE "masterKegList"
  console.log("Executing (NEW FORM) handleAddingNewKegToList inside KegControl.jsx - OBJECT IS PASTED BELOW");
    console.log(newKeg);
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formToRender: false,
    });
  };

  handleChangingSelectedKeg = (id) => {
    console.log("Executing handleChangingSelectedKeg inside KegControl.jsx - ID IS PASTED BELOW");
    console.log(id);
    //handle click event on a ticket
    const selectedKeg = this.state.masterKegList.filter(
      (keg) => keg.id === id
    )[0];
    console.dir("Printing object value ");
    console.log(selectedKeg);
    this.setState({ selectedKeg: selectedKeg }); //selectedKeg will store object from SHARED SHARE masterKegList with a UUID corresponding to clicked keg
  };

  handleDeletingKeg = (id) => {
    //handle DELETE event on a ticket which boils down to removing that ticket object from SHARED STATE "masterKegList"
    const newMasterKegList = this.state.masterKegList.filter(
      (keg) => keg.id !== id
    );
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null,
    });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter((keg) => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false, //Set to false since dont wont EditKegForm component to show
      selectedKeg: null, //Set to false since wont want KefDetail component showing now that Keg is deleted
    });
  };

  handlePintSale = (id) => {
    console.log("Executing PINT Method inside KegControl.jsx");
    //const newMasterKegList2 = this.state.masterKegList.filter( (keg) => keg.id !== id ); //filter out clicked one
    console.log("Inside handlePintSale - ID is pasted below");
     console.log(id);
    //this.setState({
    //  masterKegList: newMasterKegList2
      // sellPint: true,
   // });
    
  //   const selectedKeg2 = this.state.masterKegList.filter( (keg) => keg.id === id)[0];
  //   console.log("Inside handlePintSale - selectedKeg2 before ");
  //   console.log(selectedKeg2);
  // //  selectedKeg2.pintQty = selectedKeg2.pintQty;
    
  //   console.log("Inside handlePintSale - selectedKeg2 after ");
  //   console.log(selectedKeg2);

  //   const newMasterKegList3 = this.state.masterKegList.concat(selectedKeg2);
  //   this.setState({
  //     masterKegList: newMasterKegList3,
  //     // sellPint: true,
    // });
  };

  render() {
    let currentlyVisibleForm = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleForm = (
        <EditKegForm
          keg={this.state.selectedKeg}
          onEditKeg={this.handleEditingKegInList}
        />
      );
      buttonText = "Return to Keg List";
    }
    else if (this.state.selectedKeg != null) {
      console.log(
        "Inside the this.state.selectedKeg != null CONDITIONAL RENDERING"
      );
      currentlyVisibleForm = (
        <KegDetail
          keg={this.state.selectedKeg}
          onClickingDelete={this.handleDeletingKeg}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.state.formToRender) {
      currentlyVisibleForm = (
        <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      );
       buttonText = "Return to Keg List";
    } else { //KegList.jsx shall render if LOCAL STATE "formToRender" is FALSE
      
      currentlyVisibleForm = (
        <KegList
          kegList={this.state.masterKegList}
          onKegSelectPintSale={this.handlePintSale}
          onKegSelection={this.handleChangingSelectedKeg}
        />
      ); //To handle user click on Keg.jsx, pass this method; Pass SHARED STATE "masterKegList" KegList.jsx
      buttonText = "Add New Keg";
    }
    return (
      <React.Fragment>
        <h2>KeyControl.jsx</h2>
        {currentlyVisibleForm}
        <br></br>
        <button onClick={this.handleClick}>{buttonText}</button>{" "}
      </React.Fragment>
    );
  }
}

export default KegControl;
