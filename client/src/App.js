import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import { book_onload } from "./redux/actions/actions";
import AppRouter from "./router/AppRouter";

export default function App() {
  const dispatch = useDispatch();
  async function getBook() {
    const response = await fetch("http://localhost:8080/api/user");
    const data = await response.json();
    dispatch(book_onload(data));
  }

  useEffect(() => {
    getBook();
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <AppRouter />
      </Switch>
    </>
  );
}
