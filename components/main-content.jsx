import React from "react"

export default function MainContent() {

  const [memeImagesData, setMemeImagesData] = React.useState([]);
  const [randomMeme, setRandomMeme] = React.useState(null);

  React.useEffect(() => {
    fetch("https://api.memegen.link/templates/")
      .then(response => response.json())
      .then(data => {
        const filteredData = data.filter(meme => meme.lines === 2);
        setMemeImagesData(filteredData);
      });
  }, []);

  React.useEffect(() => {
    if (memeImagesData.length > 0) {
      const randomIndex = Math.floor(Math.random() * memeImagesData.length);
      const random = memeImagesData[randomIndex];
      setRandomMeme(random);
      console.log("Random meme:", random);
    }
  }, [memeImagesData]);
  
  function generateNewImage(params) {
    if (memeImagesData.length > 0) {
      const randomIndex = Math.floor(Math.random() * memeImagesData.length);
      const random = memeImagesData[randomIndex];
      setRandomMeme(random);
      console.log("Random meme:", random);
    }
  }

  return (
  <main className="container main-grid" id="main" aria-labelledby="mainHeading">
    <h2 id="mainHeading" className="visually-hidden">Meme generator interface</h2>
    
    <section id="controls" className="panel" aria-labelledby="controlsLabel">
      <h3 id="controlsLabel">Controls</h3>

      <form className="controls" aria-describedby="controlsDesc">


        <div className="field">
          <label htmlFor="imageInput">Generate Image</label>
          <button className="btn btn-primary" type="button">New Image</button>
        </div>

        <div className="field">
          <label htmlFor="topText">Top text</label>
          <input id="topText" name="topText" type="text" maxLength="120" placeholder="When you open the assignment" aria-label="Top text" disabled></input>
        </div>

        <div className="field">
          <label htmlFor="bottomText">Bottom text</label>
          <input id="bottomText" name="bottomText" type="text" maxLength="120" placeholder="And it's due tomorrow" aria-label="Bottom text" disabled></input>
        </div>
        <div className="field">
          <label htmlFor="leftText">LeftText</label>
          <input id="leftText" name="leftText" type="text" maxLength="120" placeholder="And it's due tomorrow" aria-label="leftText" disabled></input>
        </div>
        <div className="field">
          <label htmlFor="rightText">rightText</label>
          <input id="rightText" name="rightText" type="text" maxLength="120" placeholder="And it's due tomorrow" aria-label="rightText" disabled></input>
        </div>

        <div className="row">
          <div className="field">
            <label htmlFor="fontSize">Font size</label>
            <input id="fontSize" name="fontSize" type="range" min="18" max="120" value="36" aria-valuemin="18" aria-valuemax="120" disabled></input>
          </div>

          <div className="field">
            <label htmlFor="fontFamily">Font</label>
            <select id="fontFamily" name="fontFamily" disabled>
              <option>Impact</option>
              <option>Open Sans</option>
              <option>Inter</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="field">
            <label htmlFor="textColor">Text color</label>
            <input id="textColor" name="textColor" type="color" value="#ffffff" disabled></input>
          </div>

          <div className="field">
            <label htmlFor="strokeWidth">Stroke</label>
            <input id="strokeWidth" name="strokeWidth" type="range" min="0" max="10" value="2" disabled></input>
          </div>
        </div>

        <div className="actions">
          <button className="btn btn-primary" type="button" disabled aria-disabled="true">Apply (disabled)</button>
          <button className="btn btn-ghost" type="reset">Reset</button>
        </div>
      </form>
    </section> 

    <section id="preview" className="panel preview" aria-labelledby="previewLabel">
      <h3 id="previewLabel">Preview</h3>

      <figure className="meme-wrap" role="img" aria-label="Meme preview placeholder">
          {randomMeme ? (
              <img src={randomMeme.blank} alt={randomMeme.name} />
            ) : (
              <p>Loading meme...</p>
          )}
      </figure>


    </section>

  </main>
  )
}