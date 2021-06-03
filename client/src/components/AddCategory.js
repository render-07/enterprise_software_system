import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../actions/categoryActions';

const AddCategory = () => {

    // Call dispatch
    const dispatch = useDispatch(); 
    
    // Component state.
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        // Prevents from actually submitting into a page 
        e.preventDefault();

        // Simple validation
        if (!text) {
            alert('Add a category please');
            return;
        }

        // Create new object of Category Model
        // and the value is from the state where user input are stored.
        const newCategory = {
            categoryName: text
        };

        // Dispatch
        dispatch(addCategory(newCategory));

        // Clear state.
        setText('');
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <input type='text' placeholder='Add category' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}/>
            </div>
            <input className='btn btn-form-block' type='submit' value='Save category'/>
        </form>
    )
}

export default AddCategory
