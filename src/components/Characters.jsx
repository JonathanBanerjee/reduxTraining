import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_CHARACTER, LIKE_CHARACTER, SET_SEARCH_INPUT } from "../types";

const Characters = () => {
  const simpsons = useSelector((state) => state.simpsons);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch({ type: DELETE_CHARACTER, payload: id });
  };

  const onLike = (id) => {
    dispatch({ type: LIKE_CHARACTER, payload: id });
  };

  // Filter the characters based on the search input
  const filtered =
    simpsons &&
    simpsons.filter((item) => {
      return item.character.toLowerCase().includes(search.toLowerCase());
    });

  return (
    <>
      <input
        type="text"
        onInput={(e) => {
          dispatch({ type: SET_SEARCH_INPUT, payload: e.target.value });
        }}
      />
      {filtered &&
        filtered.map((item) => (
          <div key={item.id}>
            <p onClick={() => onDelete(item.id)}>{item.quote}</p>
            <p onClick={() => onLike(item.id)}>{item.quote}</p>
          </div>
        ))}
    </>
  );
};

export default Characters;
