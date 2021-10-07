import { BOOKS_ONLOAD } from "../types/types";

export function book_onload(payload) {
    return dispatch => {
        dispatch({type: BOOKS_ONLOAD, payload})
    }
}