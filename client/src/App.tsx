import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {Switch} from 'react-router';
import Navbar from "./components/Navbar/Navbar";
import { book_onload } from "./redux/actions/actions";
import AppRouter from "./router/AppRouter";
import axios from 'axios';

interface IFetch {
  book_id: number;
  title: string;
  isbn: number;
  description: string;
  price: number
}

export const App: React.FC = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    async function getBook() {
      try {
        const {data} = await axios.get<IFetch[]>("http://localhost:8080/api/book");
        dispatch(book_onload(data));
      } catch(e) {
        console.log(e);
      }
    }
    getBook();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Switch>
        <AppRouter />
      </Switch>
    </>
  );
}
