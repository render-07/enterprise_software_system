import { GET_CATEGORIES, ADD_CATEGORY, DELETE_CATEGORY, CATEGORIES_LOADING } from './types';
import axios from 'axios';

export const getCategories = () => dispatch => {
    // return {
    //     type: GET_CATEGORIES
    // }
    dispatch(setCategoriesLoading());
    axios
        .get('http://localhost:5000/api/categories')
        .then(res => dispatch({
            type: GET_CATEGORIES,
            payload: res.data
        })
    )
}

export const setCategoriesLoading = () => {
    return {
        type: CATEGORIES_LOADING
    }
}