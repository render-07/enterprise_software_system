import { GET_CATEGORIES, ADD_CATEGORY, DELETE_CATEGORY, CATEGORIES_LOADING } from '../actions/types';

const initialState = {
    // { id: 1, categoryName: 'Extra' },
    // { id: 2, categoryName: 'Clocks' },
    // { id: 3, categoryName: 'Ricardo Milos' },
    categories: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                loading: false
            }
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [action.payload, ...state.categories]
            }
        case CATEGORIES_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}