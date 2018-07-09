import { FETCH_ALBUMS, SEARCH_CHANGED, SEARCH_START, SEARCH_ALBUMS } from '../actions/types';

const INITIAL_STATE = {
    results: [],
    loading: false,
    searchString: ''
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_ALBUMS:
            return { ...state, results: action.payload };
        case SEARCH_CHANGED:
            return { ...state, searchString: action.payload };
        case SEARCH_START:
            return { ...state, loading: true };
        case SEARCH_ALBUMS:
            return { ...state, loading:false, results: action.payload };
        default:
            return state;
    }
}
