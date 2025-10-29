import React from "react"

export default function MainContent() {

  const [memeImagesData, setMemeImagesData] = React.useState([]);
  const [randomMeme, setRandomMeme] = React.useState(null);
  const [topText, setTopText] = React.useState('')
  const [centerText, setCenterText] =React.useState('')
  const [bottomText, setBottomText] =React.useState('')
  const [textColor, setTextColor] = React.useState("white");
  const [textBorder, setTextBorder] = React.useState('black')

  React.useEffect(() => {
    fetch("https://api.memegen.link/templates/")
    .then(res => res.json())
    .then(data => {
      const defaultPositionTemplates = data.filter(t => t.lines === 2);
      console.log(defaultPositionTemplates);
      setMemeImagesData(defaultPositionTemplates)
    });
  }, []);
  React.useEffect(() => {
    if (memeImagesData.length > 0) {
      const randomIndex = Math.floor(Math.random() * memeImagesData.length);
      const random = memeImagesData[randomIndex];
      setRandomMeme(random);
    }
  }, [memeImagesData]);

  function toggleTextColor() {
    setTextColor(prev => (prev === "white" ? "black" : "white"));
    setTextBorder(prev => (prev === "white" ? "black" : "white"))
  }
  
//js 
//
  function resetInputs(params) {
    setBottomText('')
    setCenterText('')
    setTopText('')
    document.querySelectorAll(".txt-input").forEach(input => input.value = '')
    
  }

  function generateNewImage() {
    if (memeImagesData.length > 0) {
      const randomIndex = Math.floor(Math.random() * memeImagesData.length);
      const random = memeImagesData[randomIndex];
      setRandomMeme(random);
    }
  }
  // 







  return (
  <main className="container main-grid" id="main" aria-labelledby="mainHeading">
    
    <section id="controls" className="panel" aria-labelledby="controlsLabel">
      <h3 id="controlsLabel">Controls</h3>

      <form className="controls" aria-describedby="controlsDesc">


        <div className="field">
          <label htmlFor="imageInput">Generate Image</label>
          <button onClick={generateNewImage} id="new-img-btn" className="btn" type="button">New Image</button>
        </div>

        <div className="field">
          <label htmlFor="topText">Top text</label>
          <input className="txt-input" id="topText" name="topText" type="text" maxLength="120" placeholder="When you open the assignment" aria-label="Top text"
          onChange={(event)=> setTopText(event.target.value)}
          ></input>
        </div>

        <div className="field">
          <label htmlFor="centerText">Center Text</label>
          <input className="txt-input" id="centerText" name="centerText" type="text" maxLength="120" placeholder="And it's due at 12" aria-label="center Text"
          onChange={(event)=> setCenterText(event.target.value)}
          ></input>
        </div>

        <div className="field">
          <label htmlFor="bottomText">Bottom text</label>
          <input className="txt-input" id="bottomText" name="bottomText" type="text" maxLength="120" placeholder="The time now is 11:45" aria-label="Bottom text"
          onChange={(event)=> setBottomText(event.target.value)}
          ></input>
        </div>
        
        <button
            type="button"
            className="btn color-toggle-btn"
            onClick={toggleTextColor}
          >
            Toggle Text Color
        </button>

      </form>
    </section> 

    <section id="preview" className="panel preview" aria-labelledby="previewLabel">
      <h3 id="previewLabel">Preview</h3>

      <figure className="meme-wrap" role="img" aria-label="Meme preview">
          
          {randomMeme ? (
              <div className="relative-txt-cont">
                <img src={randomMeme.blank} alt={randomMeme.name} />
               
                {topText.length>0? ( 
                <p className="meme-txt top-txt"
                style={{ color: textColor,
                  WebkitTextStroke: `1px ${textBorder}`
                 }}
                >{topText}</p>) : (null)}

                
                {centerText.length>0? ( 
                <p className="meme-txt center-txt"
                style={{ color: textColor,
                  WebkitTextStroke: `1px ${textBorder}`
                 }}
                >{centerText}</p> ) : (null)}
                
                
                {bottomText.length>0? ( 
                <p className="meme-txt bottom-txt"
                style={{ color: textColor,
                  WebkitTextStroke: `1px ${textBorder}`
                 }}
                >{bottomText}</p> ) : (null)}


              </div>
            ) : (
              <p>Loading meme...</p>
          )}
          
      </figure>


    </section>

  </main>
  )
}