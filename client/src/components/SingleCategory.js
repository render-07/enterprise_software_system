import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { deleteCategory } from '../actions/categoryActions';
import {useState} from 'react'
import AddItem from './AddItem';
import ItemTable from './Tables/ItemTable';

const SingleCategory = ({category, items}) => {

    // Component state
    const [showItems, setShowItems] = useState(false)

    const toggleShowItems = () => {
        setShowItems(!showItems)
    }
       
    const [showAddItem, setShowAddItem] = useState(false);

    const handleClose = () => setShowAddItem(false);
    const handleShow = () => setShowAddItem(true);


    // Call dispatch
    const dispatch = useDispatch();

    return (
        
        <div className="wrapper">
            <div className='category'>
                <h3>{category.categoryName}
                    <button className = 'side-btn'
                            onClick={() => dispatch(deleteCategory(category._id))}
                            style={{color: 'white', backgroundColor: 'red'}}>
                            Delete this category
                    </button> 

                    <h4>|</h4>
                    
                    <button className = 'side-btn'
                            onClick={handleShow}
                            style={showAddItem ? {backgroundColor: 'red'} : {backgroundColor: 'green'}}>
                            {showAddItem ? 'Close' : 'Add new item'}
                    </button> 
                    
                    <button className = 'side-btn'
                            onClick={toggleShowItems}
                            style={showItems ? {backgroundColor: 'red'} : {backgroundColor: 'black'}}>
                            {showItems ? 'Close' : 'Show items'}
                    </button> 
                </h3>
            </div>
            <AddItem handleShow={handleShow} handleClose={handleClose} show={showAddItem}/>
            {showItems && <ItemTable items={items}/>}
        </div>
    )
}

export default SingleCategory
