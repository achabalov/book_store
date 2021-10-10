import { AUTHOR_ONLOAD, BOOKS_ONLOAD, GENRE_ONLOAD } from "../types/types";

export function book_onload(payload) {
    return dispatch => {
        dispatch({type: BOOKS_ONLOAD, payload})
    }
}

export function genre_onload(payload) {
    return dispatch => {
        dispatch({type: GENRE_ONLOAD, payload})
    }
}

export function author_onload(payload) {
    return dispatch => {
        dispatch({type: AUTHOR_ONLOAD, payload})
    }
}