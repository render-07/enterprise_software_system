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

        // Create new object of Category Model
        // and the value is from the state where user input are stored.
        const newItem = {
            itemName: itemName,
            quantity: quantity,
            price: price
        };

        // Dispatch
        dispatch(addItem(newItem));

        handleClose();
        
        // Clear state.
        setItemName('');
        setQuantity('');
        setPrice('');
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Add new item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="center">
                    <form onSubmit={onSubmit}>

                        <div className="inputbox">
                            <input type="text" required="required" 
                                value={itemName}
                                onChange={(e) => setItemName(e.target.value)}/>
                            <span>Item name</span>
                        </div>

                        <div className="inputbox">
                            <input type="number" required="required"
                                value={quantity} 
                                onChange={(e) => setQuantity(e.target.value)}/>
                            <span>Quantity</span>
                        </div>

                        <div className="inputbox">
                            <input type="number" required="required"
                                value={price} 
                                onChange={(e) => setPrice(e.target.value)}/>
                            <span>Price</span>
                        </div>

                        <Modal.Footer>
                            <Button style={{backgroundColor: 'green'}}
                                type='submit' value='Add item'>
                                Add item
                            </Button>
                        </Modal.Footer>
                    </form>
                </div>
            </Modal.Body>  
        </Modal>
    )
}

export default AddItem
