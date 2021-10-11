import { ActionEnum, ActionsType, InitialInterface } from "../types/types";

const initialState:InitialInterface = {
    books: [],
    genre: [],
    author: []
};

export const reducer = (state = initialState, action: ActionEnum) => {
    switch(action.type) {
        case ActionsType.BOOKS_ONLOAD:
            return {
                ...state,
                books: action.payload
            }
        case ActionsType.GENRE_ONLOAD:
            return {
                ...state,
                genre: action.payload
            }
        case ActionsType.AUTHOR_ONLOAD: 
            return {
                ...state,
                author: action.payload
            }
        default: return state;
    }
}