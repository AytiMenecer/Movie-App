import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./../Components/movies/moviesSlice";

const store = configureStore({
    reducer: {
        movies: movieReducer.reducer,
    },
});

export default store;