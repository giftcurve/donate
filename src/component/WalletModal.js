import { Modal, Button } from 'react-bootstrap';

const WalletModal = ({ showModal, handleClose }) => {
  
    const redirectToMetaMask = () => {
      window.open('https://metamask.io/', '_blank'); // Open MetaMask website in a new tab
      handleClose(); // Close the modal
    };
   
    return (
      <div className='walletmodaljs'>
        <Modal className='textingout' show={showModal} onHide={handleClose}> 
          <Modal.Header closeButton>
            <Modal.Title>Install MetaMask</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
            Please install MetaMask to connect your wallet.
            <Button variant="primary" onClick={redirectToMetaMask}>
              Install MetaMask
            </Button>
          </Modal.Body>
        </Modal>
      </div>
      
    );
  };

export default WalletModal
