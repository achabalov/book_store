export interface IBook {
    book_id: number;
    title: string;
    isbn: string;
    description: string;
    price: number;
}

export interface IGenre {
    genre_id: number;
    type: string;
}

export interface IAuthor {
    author_id: number;
    first_name: string;
    last_name: string;
}