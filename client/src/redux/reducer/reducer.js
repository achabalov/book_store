import { BOOKS_ONLOAD } from "../types/types";

const initialState = {
    books: []
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BOOKS_ONLOAD:
            return {
                ...state,
                books: action.payload
            }
        default: return state;
    }
}