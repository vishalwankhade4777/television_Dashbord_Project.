import React from 'react';
import '../css/ShowDetails.css';

const ShowDetails = ({ show }) => {
  const backgroundImage = show.image
    ? `url(${show.image.original})`
    : 'linear-gradient(to bottom, #141414, #000)';  // Fallback gradient
  
  return (
    <div
      className="show-details"
      style={{ backgroundImage: backgroundImage }}
    >
      <img src={show.image?.medium} alt={show.name} />
      <h1>{show.name}</h1>
      <p>{show.summary ? show.summary.replace(/<[^>]*>/g, '') : 'No description available.'}</p>
      <div className="metadata">
        <p><strong>Genres:</strong> {show.genres.join(', ')}</p>
        <p><strong>Language:</strong> {show.language}</p>
        <p><strong>Premiered:</strong> {show.premiered}</p>
        <p><strong>Runtime:</strong> {show.runtime} minutes</p>
        <p><strong>Rating:</strong> {show.rating.average || 'N/A'}</p>
      </div>
      <button className="back-button" onClick={() => window.history.back()}>
        Back to List
      </button>
    </div>
  );
};

export default ShowDetails;
