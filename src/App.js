import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Discover from "./components/discover";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";
import SavedMemes from "./components/savedMeme";

function App() {
  const [memes, setMemes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  let savedMemesList = read_cookie("MemeList");
  const [reset, setReset] = useState(0);

  useEffect(() => {
    getResult();
  }, [query, postsPerPage, reset]);

  const addCookieMemes = memeList => {
    console.log("add cookie meme");
    savedMemesList.push(memeList);
    console.log(savedMemesList);
    bake_cookie("MemeList", savedMemesList);
  };

  const resetSavedMeme = () => {
    savedMemesList = [];
    delete_cookie("MemeList");
    console.log("reset cookie");
    setReset(reset + 1);
  };

  const getResult = async () => {
    setLoading(true);
    const response = await fetch(
      `https://meme-api.herokuapp.com/gimme/${query}100`
    );
    const data = await response.json();
    setMemes(data.memes);
    setLoading(false);
  };

  const updateSearch = event => {
    setSearch(event.target.value);
  };

  const updateCount = event => {
    setPostsPerPage(event.target.value);
  };

  const getSearch = event => {
    event.preventDefault();
    setQuery(search + "/");
  };

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentMemes = memes.slice(indexOfFirstPost, indexOfLastPost);
  const totalPage = Math.ceil(memes.length / postsPerPage);

  return (
    <Router>
      <div className="App">
        <Navbar handleSubmit={getSearch} handleChange={updateSearch} />
        <div className="container">
          <Route
            path="/"
            exact
            component={() => (
              <Discover
                handleCount={updateCount}
                memeList={currentMemes}
                loading={loading}
                savedMemes={addCookieMemes}
                totalPage={totalPage}
                currentPage={currentPage}
                paginate={paginate}
              />
            )}
          />
          <Route
            path="/saved"
            exact
            component={() => (
              <SavedMemes
                savedMemesList={savedMemesList}
                handleReset={resetSavedMeme}
              />
            )}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
