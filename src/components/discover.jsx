import React from "react";
import Card from "./card";
import Pagination from "./pagination";

const Discover = ({
  handleCount,
  memeList,
  loading,
  savedMemes,
  paginate,
  totalPage,
  currentPage
}) => {
  if (loading) {
    return (
      <h2 className="text-dark row justify-content-center my-5">Loading...</h2>
    );
  }

  return (
    <div>
      <div className="d-flex row justify-content-center my-5 align-items-center">
        <h4 className="text-dark  ">Number of memes displayed per page:</h4>
        <form className="form-inline my-2 my-lg-0 mx-3">
          <select className="custom-select" onChange={handleCount}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </form>
        <a href="/">
          <button type="button" class="btn btn-primary">
            Refresh
          </button>
        </a>
      </div>
      <div className="d-flex flex-row align-content-between flex-wrap justify-content-around">
        {memeList.map(meme => (
          <Card
            meme={meme}
            key={meme.url}
            imgUrl={meme.url}
            title={meme.title}
            postLink={meme.postLink}
            subreddit={meme.subreddit}
            savedMemes={saved => {
              savedMemes(saved);
            }}
          />
        ))}
      </div>
      <div className="d-flex row justify-content-center my-5">
        <Pagination
          totalPage={totalPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Discover;
