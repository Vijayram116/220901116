import React, { useState } from "react";
import "./Shortener.css";

function Shortener() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const generateShortUrl = () => {
    const randomCode = Math.random().toString(36).substring(2, 8);
    const fakeShortUrl = `https://short.ly/${randomCode}`;
    setShortUrl(fakeShortUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (originalUrl.trim() === "") return;
    generateShortUrl();
  };

  return (
    <div className="container">
      <h1 className="heading">URL SHORTENER</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter the URL"
            className="inputtext"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
          />
          <button type="submit" className="submit">SUBMIT</button>
          <textarea
            readOnly
            value={shortUrl}
            placeholder="Shortened URL will appear here"
          />
        </div>
      </form>
    </div>
  );
}

export default Shortener;
