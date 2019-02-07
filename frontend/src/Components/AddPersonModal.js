import React from 'react';
import Modal from 'react-responsive-modal';
import CreateButton from './/CreateButton';

class AddPersonModal extends React.Component {
        state = {
            open: false,
        }
        
        onOpenModal = () => {
            this.setState({ open: true });
        }
        
        onCloseModal = () => {
            this.setState({ open: false });
        }
 

  render() {
    const { open } = this.state;
    return (

        <div>
            <CreateButton addPerson={this.onOpenModal} />

            {/* <ModalContainer> */}
                <Modal styles={b1}  open={open} onClose={this.onCloseModal} focusTrapped>
                    <h2 >Add New Person</h2>
                    <form action="">
                    <p>
                        <label htmlFor="firstName">
                        First name
                        <input 
                        type="text" 
                        placeholder="First name"
                        />
                        </label>
                    </p>
                    <p>
                        <label htmlFor="lastName">
                        Last name
                        <input type="text" />
                        </label>
                    </p>
                    <button>test</button>
                    <input type="submit" value="Submit" />
                    </form>
                </Modal>
            {/* </ModalContainer> */}
      </div>
    );
  }
}
 
export default AddPersonModal

const b1 = {
    modal: {
    
        background: "#F7F8FA", 
      color: "#525A65",
      width: "700px",
      height: "400px"
    }
  };
