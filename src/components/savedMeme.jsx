import React from "react";
import Card from "./card";

const SavedMemes = ({ savedMemesList, handleReset }) => {
  if (savedMemesList.length === 0) {
    return (
      <h4 className="text-dark row justify-content-center my-5">
        There are no saved memes
      </h4>
    );
  }

  return (
    <div>
      <div className="row justify-content-center my-5">
        <button onClick={handleReset} className="btn btn-outline-danger">
          Remove All Saved Memes
        </button>
      </div>
      <div className="d-flex flex-row-reverse align-content-between flex-wrap justify-content-center">
        {savedMemesList.slice(0, savedMemesList.length).map(meme => (
          <Card
            meme={meme}
            key={meme.url}
            imgUrl={meme.url}
            title={meme.title}
            postLink={meme.postLink}
            subreddit={meme.subreddit}
          />
        ))}
      </div>
    </div>
  );
};

export default SavedMemes;
