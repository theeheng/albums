import axios from 'axios';
import { FETCH_ALBUMS, SEARCH_START, SEARCH_CHANGED, SEARCH_ALBUMS } from './types';

export const fetchAlbums = () => async (dispatch) => {
    try {
        let { data } = await axios.get('https://react-native-albums.herokuapp.com/albums');

        console.log('result get all data album: '+data.length);
        dispatch({ type: FETCH_ALBUMS, payload: data });
    } catch(e) {
        console.error(e);
    }
};

export const searchAlbums = (searchString) => async (dispatch) => {

    dispatch({ type: SEARCH_START });

    try {
        let { data } = await axios.get('https://react-native-albums.herokuapp.com/search?name='+searchString);

        console.log('result search data album: '+data.length);
        dispatch({ type: SEARCH_ALBUMS, payload: data });
    } catch(e) {
        console.error(e);
    }
};

export const searchChanged = (searchString) => {

    return {
    type: SEARCH_CHANGED,
    payload: searchString
};
};
