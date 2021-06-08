import { useEffect } from 'react'
import SingleCategory from './SingleCategory'
import {  useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../actions/categoryActions';
import { getItems } from '../actions/itemActions';

const Categories = () => {
    // Call dispatch
    const dispatch = useDispatch();

    // useEffect is equivalent to componentDidMount()
    useEffect(() => { 
        dispatch(getCategories()); 
        dispatch(getItems());
    }, []);
    
    // Get reducer from index.js
    const category = useSelector((state) => state.category);
    const item = useSelector((state) => state.item);

    // Deconstruct
    // Follow the name of array in the state in deconstructuring.
    const { categories } = category;
    const { items } = item;

    return (
        categories.map((ctgry) => (                
            <SingleCategory key={ctgry._id} category={ctgry} categoryID={ctgry.categoryID} 
            items={items.filter(item => item.categoryID == ctgry.categoryID)}/>
        ))
    )
}

export default Categories;
