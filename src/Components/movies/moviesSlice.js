import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    status: "idle",
    error: null,
    selectedMovie: {},
    movies: [{
            id: 1,
            name: "Dark",
            language: "De",
            imdb: 8.9,
            type: "series",
            category: "Thriller",
            createdYear: 2017,
            subject: "Dark is a German science fiction.",
        },

        {
            id: 2,
            name: "Black Summer",
            language: "En",
            imdb: 7.5,
            type: "scream",
            createdYear: 2019,
            category: "Zombie",
            subject: "Dark is a German science fiction.",
        },

        {
            id: 3,
            name: "La Casa De Papel",
            language: "Es",
            imdb: 9.5,
            type: "series",
            category: "Thriller",
            createdYear: 2018,
            subject: "Dark is a German science fiction.",
        },

        {
            id: 4,
            name: "Breking Bad",
            language: "En",
            imdb: 6.5,
            type: "series",
            category: "Thriller",
            createdYear: 2014,
            subject: "Dark is a German science fiction.",
        },

        {
            id: 5,
            name: "Fury",
            language: "En",
            imdb: 9.0,
            type: "film",
            category: "Thriller",
            createdYear: 2015,
            subject: "Dark is a German science fiction.",
        },
    ],
};

const movieSlice = createSlice(sliceInvoker());

function sliceInvoker() {
    return {
        name: "movies",
        initialState,
        reducers: {
            addMovie: {
                reducer: (state, action) => {
                    state.movies.push(action.payload);
                },
                prepare: (
                    name,
                    language,
                    type,
                    category,
                    imdb,
                    createdYear,
                    subject
                ) => {
                    return {
                        payload: {
                            name,
                            language,
                            type,
                            category,
                            imdb,
                            createdYear,
                            subject,
                            id: nanoid(),
                        },
                    };
                },
            },

            editMovie: (state, action) => {
                const {
                    name,
                    language,
                    type,
                    category,
                    imdb,
                    createdYear,
                    subject,
                    id,
                } = action.payload;

                const findedMovie = state.movie.find(
                    (movie) => movie.id === parseInt(id)
                );

                if (findedMovie) {
                    findedMovie.name = name;
                    findedMovie.language = language;
                    findedMovie.type = type;
                    findedMovie.category = category;
                    findedMovie.imdb = imdb;
                    findedMovie.createdYear = createdYear;
                    findedMovie.subject = subject;
                }
            },
        },

        extraMovies: {},
    };
}

export const selectedAllMovies = (state) => state.movies.movies;

export const { addMovie } = movieSlice.actions;

export const selectedMovieId = (state, movieId) => {
    return state.movies.movies.find((movie) => movie.id === movieId);
};

export default movieSlice.reducer;