import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { asyncThunk } from "../state/fetcher";
type result = {
  fetcher: {
    loading: boolean;
    data: {
      data: {
        items: {
          title: string;
          link: string;
          displayLink: string;
          snippet: string;
        }[];
      };
    };
    error: "";
  };
};

const SearchResult = () => {
  const state = useSelector((state: result) => state.fetcher);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(asyncThunk(localStorage.getItem("data") || ""));
  }, []);
  console.log(state);
  return (
    <div>
      {state &&
        state.error === "" &&
        state.data.data &&
        state.data.data.items.map((element, id) => (
          <div key={id} className="objects">
            <a className="displayLink" href={element.link}>
              {element.displayLink}
            </a>
            <div>
              <a className="link" href={element.link}>
                {element.title}
              </a>
              <p className="desc">{element.snippet}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SearchResult;
