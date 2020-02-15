import React, { useState } from "react";

const Card = ({ title, imgUrl, subreddit, postLink, meme, savedMemes }) => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  const toggler = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <div className="card mb-4" style={{ width: 300 }}>
      <img className="card-img-top" src={imgUrl} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Subreddit: {subreddit}</p>
        <p className="card-text ">
          Link Post: <a href={postLink}>{postLink}</a>
        </p>
        <hr />
        {!toggle ? (
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              savedMemes(meme);
              toggler();
            }}
          >
            Save for Later
          </button>
        ) : (
          <button type="button" class="btn btn-success disabled" disabled>
            Saved
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
