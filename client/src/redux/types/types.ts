import { IAuthor, IBook, IGenre } from "../../types/types";

export const BOOKS_ONLOAD = 'BOOK/BOOKS_ONLOAD';
export const GENRE_ONLOAD = 'GENRE/GENRE_ONLOAD';
export const AUTHOR_ONLOAD = 'AUTHOR/AUTHOR_ONLOAD';

export interface InitialInterface {
    books: IBook[],
    genre: IGenre[],
    author: IAuthor[]
}

export interface ActionEnum {
    type: string,
    payload: any[] 
}

export enum ActionsType {
    BOOKS_ONLOAD = 'BOOK/BOOKS_ONLOAD',
    GENRE_ONLOAD = 'GENRE/GENRE_ONLOAD',
    AUTHOR_ONLOAD = 'AUTHOR/AUTHOR_ONLOAD'
}