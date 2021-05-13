import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import useReducer from '../features/user/userSlice';
import movieReducer from '../features/movie/movieSlice';

export default configureStore ({
    reducer: {
        user:useReducer,
        movie: movieReducer,
    },
    midddleware: getDefaultMiddleware({
        serializableCheck:false,
    }),
});