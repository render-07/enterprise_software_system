import { GET_CATEGORIES, ADD_CATEGORY, DELETE_CATEGORY } from './types';

export const getCategories = () => {
    return {
        type: GET_CATEGORIES
    }
    // dispatch(setItemsLoading());
    // axios
    //     .get('http://localhost:5000/api/items')
    //     .then(res => dispatch({
    //         type: GET_ITEMS,
    //         payload: res.data
    //     })
    // )
}