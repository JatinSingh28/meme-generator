import React from "react";
import memes from "./memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    image:
      "https://static01.nyt.com/images/2021/04/30/multimedia/30xp-meme/29xp-meme-mediumSquareAt3X-v5.jpg",
  });

  function getNewMeme() {
    const memeArray = memes.data.memes;
    const meme = memeArray[Math.floor(Math.random() * memeArray.length)];
    const url = meme.url;
    // console.log(url);
    setMeme((prevMeme) => ({
      ...prevMeme,
      image:url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top Text" />
        <input type="text" className="form--input" placeholder="Bottom Text" />
        <button className="form--btn" onClick={getNewMeme}>
          Get a new image
        </button>
      </div>
      <img src={meme.image} className="meme--image" />
    </main>
  );
}
