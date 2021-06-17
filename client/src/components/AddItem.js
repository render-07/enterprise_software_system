import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/itemActions';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AddItem = ({handleClose, show, categoryID, title}) => {

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
            price: price,
            categoryID, categoryID
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
                <Modal.Title className="center inputBox">Add new item ({title})</Modal.Title>
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

                        <div className="inputbox">
                            <select id="suppliers" name="suppliers" required>
                                <option value="">None</option>
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                            </select>
                        </div>

                        <Modal.Footer>
                            <Button style={{backgroundColor: '#69c79d'}}
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
