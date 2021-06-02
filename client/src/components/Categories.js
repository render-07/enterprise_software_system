import { useEffect } from 'react'
import SingleCategory from './SingleCategory'
import {  useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../actions/categoryActions';

const Categories = () => {
    // Call dispatch
    const dispatch = useDispatch();

    // Get reducer from index.js
    const category = useSelector((state) => state.category);

    // Deconstruct
    // 'categories' is the name of array in the state
    // so the name must be followed in deconstructuring.
    const { categories } = category;
    
    useEffect(() => { 
        dispatch(getCategories()); 
    }, []);

    return (
        categories.map((rec) => (
            <SingleCategory key = {rec.id} category = {rec}/>)
        )
    )
}

export default Categories;