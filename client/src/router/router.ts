import Genre from "../components/genre/Genre";
import Author from '../components/author/Author'
import BooksList from '../components/books/BooksList'
import {AdminPanel} from "../components/adminPanel/AdminPanel";

interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    HOME = '/',
    AUTHOR = '/author',
    GENRE = '/genre',
    ADMINS = '/admins'
}
export const publicRoute: IRoute[] = [
    {path: RouteNames.HOME, component: BooksList, exact: true},
    {path: RouteNames.AUTHOR, component: Author, exact: true},
    {path: RouteNames.GENRE, component: Genre, exact: true},
    {path: RouteNames.ADMINS, component: AdminPanel, exact: true},
]