import { useState } from 'react';

const AddCategory = () => {

    const [text, setText] = useState('');

    return (
        <form className='add-form'>
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
