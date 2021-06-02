import { FaTimes } from 'react-icons/fa'

const SingleCategory = ({category}) => {
    return (
        <div className = 'category'>
            <h3>{category.categoryName} 
            <FaTimes 
                style = {{color: 'red', cursor: 'pointer'}}/>
            </h3>
        </div>
    )
}

export default SingleCategory
