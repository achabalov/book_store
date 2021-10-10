import Genre from "../components/genre/Genre";
import Author from '../components/author/Author'
import BooksList from '../components/books/BooksList'
import AdminPanel from "../components/adminPanel/AdminPanel";
export const publicRoute = [
    {path: '/', component: BooksList, exact: true},
    {path: '/author', component: Author, exact: true},
    {path: '/genre', component: Genre, exact: true},
    {path: '/admins', component: AdminPanel, exact: true},
]