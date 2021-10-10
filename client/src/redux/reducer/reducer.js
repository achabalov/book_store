import { AUTHOR_ONLOAD, BOOKS_ONLOAD, GENRE_ONLOAD } from "../types/types";

const initialState = {
    books: [],
    genre: [],
    author: []
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BOOKS_ONLOAD:
            return {
                ...state,
                books: action.payload
            }
        case GENRE_ONLOAD:
            return {
                ...state,
                genre: action.payload
            }
        case AUTHOR_ONLOAD: 
            return {
                ...state,
                author: action.payload
            }
        default: return state;
    }
}