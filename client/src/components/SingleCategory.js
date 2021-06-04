import { FaTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { deleteCategory } from '../actions/categoryActions';

const SingleCategory = ({category}) => {

    // Call dispatch
    const dispatch = useDispatch();

    return (
        <div className = 'category'>
            <h3>{category.categoryName} 
            <FaTimes 
                style={{color: 'red', cursor: 'pointer'}}
                onClick={() => dispatch(deleteCategory(category._id))}/>
            </h3>
        </div>
    )
}

export default SingleCategory
