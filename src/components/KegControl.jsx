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
      masterKegList: [],   //Shared State (passed down to KegList.jsx and from there to Keg.jsx)
      selectedKeg: null,   //Shared State (passed down to KegDetail.jsx and EditKegForm.jsx )
      editing: false,
      //pintsRemaining: 0
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formToRender: false,
        selectedKeg: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formToRender: !prevState.formToRender,
      }));
    }
  };

  handleAddingNewKegToList = (newKeg) => {  //Adding new ticket involves Mutating state of SHARED STATE "masterKegList"
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formToRender: false,
    });
  };

  handlePintSale = (id) => { //handle pint sale
    const selectedKegPintReduction = this.state.masterKegList.filter((keg) => keg.id === id)[0];
   // const editedMasterKegList2 = this.state.masterKegList.filter((keg) => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
    this.setState({
      selectedKeg: selectedKegPintReduction,
      editing: false,     //Set to false since dont wont EditKegForm component to show
      selectedKeg: null,   //Set to false since wont want KefDetail component showing now that Keg is deleted
      formToRender: false
    });
};
    //handlePintSale = (id) => { //handle pint sale

  handleChangingSelectedKeg = (id) => { //handle click event on a ticket
    const selectedKeg = this.state.masterKegList.filter((keg) => keg.id === id)[0];
    console.dir("Printing object value ");
    console.log(selectedKeg);
    this.setState({ selectedKeg: selectedKeg }); //selectedKeg will store object from SHARED SHARE masterKegList with a UUID corresponding to clicked keg
  };

  handleDeletingKeg = (id) => {  //handle DELETE event on a ticket which boils down to removing that ticket object from SHARED STATE "masterKegList"
    const newMasterKegList = this.state.masterKegList.filter((keg) => keg.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null,
    });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList.filter((keg) => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false,     //Set to false since dont wont EditKegForm component to show
      selectedKeg: null   //Set to false since wont want KefDetail component showing now that Keg is deleted
    });
  };

  render() {
    let currentlyVisibleForm = null;
    let buttonText = null;

    if (this.state.editing) {  
      currentlyVisibleForm = <EditKegForm ticket={this.state.selectedKeg} onEditKeg={this.handleEditingKegInList} />;
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {   //KegDetail.jsx shall render if STATE "selectedKeg" is NOT null
      currentlyVisibleForm = <KegDetail keg={this.state.selectedKeg} onClickingDelete={this.handleDeletingKeg} onClickingEdit={this.handleEditClick} />;
      //passing 3 PROPS (1st is passed as a prop called "keg"" down to our KegDetail)
      buttonText = "Return to Keg List";
    } else if (this.state.formToRender) { //NewKegForm.jsx shall render if LOCAL STATE "formToRender" is TRUE
      currentlyVisibleForm = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      //   Pass handleAddingNewKegToList method down to NewKegForm component as a prop - passed as a prop called "onNewKegCreation"
      buttonText = "Return to Keg List";
    } else {   //KegList.jsx shall render if LOCAL STATE "formToRender" is FALSE
      currentlyVisibleForm = <KegList kegList={this.state.masterKegList} 
      onKegSelectPintSale={this.handlePintSale}
       onKegSelection={this.handleChangingSelectedKeg} />;  //To handle user click on Keg.jsx, pass this method; Pass SHARED STATE "masterKegList" KegList.jsx
      buttonText = "Add New Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleForm}
        <br></br>
        <button onClick={this.handleClick}>{buttonText}</button>{" "}
      </React.Fragment>
    );
  }
}

export default KegControl;
