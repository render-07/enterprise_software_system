import { useDispatch } from 'react-redux';
import { deleteCategory } from '../actions/categoryActions';
import { useState } from 'react'
import AddItem from './AddItem';
import ItemTable from './Tables/ItemTable';

const SingleCategory = ({category, categoryID, items}) => {
    // Call dispatch
    const dispatch = useDispatch();

    // Component state
    const [showItems, setShowItems] = useState(false)
    const [showAddItem, setShowAddItem] = useState(false);

    const toggleShowItems = () => {
        setShowItems(!showItems)
    }

    const handleClose = () => setShowAddItem(false);
    const handleShow = () => setShowAddItem(true);

    console.log(items)
    return (
        <div className="wrapper">
            <div className='category'>
                <div className="category-name">
                    <h3>{category.categoryName}</h3>
                </div>

                <div className="side-btn">    

                    <button type="button" class="btn" 
                            onClick={toggleShowItems}
                            style={showItems ? {color: 'white', backgroundColor: 'red'} : {color: 'white', backgroundColor: 'black'}}>
                            {showItems ? 'Close' : 'Show items'}
                    </button>
                    
                    <button type="button" class="btn" 
                            onClick={handleShow}
                            style={{color: 'white', backgroundColor: 'green'}}>
                            Add new item
                    </button> 
        
                    <button type="button" class="btn" 
                            onClick={() => dispatch(deleteCategory(category._id))}
                            style={{color: 'white', backgroundColor: 'red'}}>
                            Delete this category
                    </button> 
                    

                </div>
                    
                
            </div>
            
            <AddItem handleClose={handleClose} show={showAddItem} categoryID={categoryID} title={category.categoryName}/>
            {showItems && <ItemTable items={items}/>}
        </div>
    )
}

export default SingleCategory
