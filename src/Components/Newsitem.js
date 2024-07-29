import React from 'react';

const Newsitem = ({ title, description, imageUrl, newsUrl,time }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={!imageUrl ? "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">Read More</a>
         
          <p className="card-text my-3"><small className="text-muted">{ new Date(time).toGMTString()}</small
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
