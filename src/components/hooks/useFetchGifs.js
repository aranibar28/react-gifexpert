import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGif";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        console.log(imgs);
        setState({ data: imgs, loading: false });
      }, 2000);
    });
  }, [category]);

  return state; // {data: [], loading: true}
};
