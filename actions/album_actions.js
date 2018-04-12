import axios from 'axios';
import { FETCH_ALBUMS } from './types';

export const fetchAlbums = () => async (dispatch) => {
    try {
        let { data } = await axios.get('https://.herokuapp.com/albums');

        console.log('result data album: '+data);
        dispatch({ type: FETCH_ALBUMS, payload: data });
    } catch(e) {
        console.error(e);
    }
};