import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import "../styles/result.scss";
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
  const [text, setText] = useState<string>("");
  const state = useSelector((state: result) => state.fetcher);
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  window.onload = () => {
    if (state.data.data.items === undefined) {
      navigate("/");
    }
  };
  useEffect(() => {
    dispatch(asyncThunk(localStorage.getItem("data") || ""));
  }, []);
  const clear = () => {
    return (
      <i
        onClick={() => {
          setText("");
        }}
        className="fa-regular fa-x clear"
      ></i>
    );
  };
  return (
    <div>
      <div className="input-container-main">
        <div className="input-container">
          <div className="input">
            <svg
              className="searchIcon"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>

            <input
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter" && text && text !== "#") {
                  navigate("/result");
                  dispatch(asyncThunk(text));
                  localStorage.setItem("data", text);
                }
              }}
            />
            <div className="clear-div">{text ? clear() : undefined}</div>
            {/*eslint-disable-next-line jsx-a11y/alt-text*/}
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAALCAYAAACd1bY6AAAABHNCSVQICAgIfAhkiAAAAE5JREFUKJHtkDEKwDAMAy+hg/7sJeBPa0unQslSSDz2FmFjJOGWmdM2p0iiVxgB2KY/wxjjSAFaRMySavA32+BaF++kL9bb2p9JKjGSxA09hjxcPLr8lgAAAABJRU5ErkJggg==" />
            <svg
              className="voice"
              focusable="false"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#4285f4"
                d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
              ></path>
              <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
              <path
                fill="#fbbc05"
                d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
              ></path>
              <path
                fill="#ea4335"
                d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
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
