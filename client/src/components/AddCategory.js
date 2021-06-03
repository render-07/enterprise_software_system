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

        if (!text) {
            alert('Add a category please');
            return;
        }

        const newCategory = {
            categoryName: text
        };

        dispatch(addCategory(newCategory));

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
