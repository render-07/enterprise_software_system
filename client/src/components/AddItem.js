import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/itemActions';
// import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AddItem = ({handleShow, handleClose, show}) => {

    // Call dispatch
    const dispatch = useDispatch();
    
    // Component state.
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const onSubmit = (e) => {
        // Prevents from actually submitting into a page 
        e.preventDefault();

        // Simple validation
        if (!itemName) {
            alert('Add an item name');
            return;
        }

        if (!quantity) {
            alert('Add quantity');
            return;
        }


        if (!price) {
            alert('Add price');
            return;
        }

        // Create new object of Category Model
        // and the value is from the state where user input are stored.
        const newItem = {
            itemName: itemName,
            quantity: quantity,
            price: price
        };

        // Dispatch
        dispatch(addItem(newItem));

        // Clear state.
        setItemName('');
        setQuantity('');
        setPrice('');
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className='form-add-item' onSubmit={onSubmit}>
                    <label className='form-control-label'>Item name:</label>
                    <input type="text" class="form-control-input" placeholder="Item name"
                        value={itemName} 
                        onChange={(e) => setItemName(e.target.value)}></input>

                    <label className='form-control-label'>Quantity:</label>
                    <input type="number" class="form-control-input" placeholder="Quantity"
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)}></input>

                    <label className='form-control-label'>Price:</label>
                    <input type="number" class="form-control-input" placeholder="Price"
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)}></input>

                    <input className='btn btn-form-block' type='submit' value='Save item'/>  
                </form>
            </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    )
}

export default AddItem
