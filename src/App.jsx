import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Characters from "./components/Characters";
import { SET_SIMPSONS } from "./types";

const App = () => {
  const dispatch = useDispatch();

  const getAPIData = async () => {
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
      );

      data.forEach((element) => {
        element.id = Math.random();
        element.liked = false;
      });

      dispatch({ type: SET_SIMPSONS, payload: data });
    } catch (e) {
      console.log("Looks like the API is down!");
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return <Characters />;
};

export default App;
