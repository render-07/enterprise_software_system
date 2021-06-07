import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory } from '../actions/categoryActions';
import { useState, useEffect } from 'react'
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

    // console.log(items.map((item) => item.categoryID == category.categoryID && ' equal'))

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
                            style={{backgroundColor: 'green'}}>
                            Add new item
                    </button> 
                    
                    <button className = 'side-btn'
                            onClick={toggleShowItems}
                            style={showItems ? {backgroundColor: 'red'} : {backgroundColor: 'black'}}>
                            {showItems ? 'Close' : 'Show items'}
                    </button> 
                </h3>
            </div>
            
            <AddItem handleShow={handleShow} handleClose={handleClose} show={showAddItem} categoryID={categoryID}/>
            {showItems && <ItemTable items={items}/>}
            {/* {items.map((item) => (
                category.categoryID == item.categoryID ? showItems && <ItemTable items={item}/> : null
            ))}  */}

            {/* {items.map((item) => item.categoryID == category.categoryID && (showItems && <ItemTable items={item}/>))} */}


        </div>
    )
}

export default SingleCategory
