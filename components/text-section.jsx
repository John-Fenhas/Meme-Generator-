import React from "react"

export default function TextSection(props) {
  console.log(props.text)
  return (
    <section id="controls" className="panel" aria-labelledby="controlsLabel">
      <h3 id="controlsLabel">Controls</h3>

      <form className="controls" aria-describedby="controlsDesc">


        <div className="field">
          <label>Generate Image</label>
          <button 
            id="new-img-btn" 
            className="btn" 
            type="button"
            onClick={props.newMeme}

          >New Meme</button>


          <label>Switch Text Color</label>
          <button
            type="button"
            className="btn color-toggle-btn"
            onClick={props.toggleColor}
          >
          Switch Color
          </button>


        </div>

        <div className="field">
          <label htmlFor="topText">Top text</label>
          <input 
          className="txt-input" 
          id="topText" 
          name="topText" 
          type="text" 
          maxLength="120" 
          placeholder="When you open the assignment" 
          aria-label="Top text"
          value={props.text.topText}
          onChange={(event) => props.click(event.target.name, event.target.value)}
          ></input>
        </div>

        <div className="field">
          <label htmlFor="centerText">Center Text</label>
          <input 
          className="txt-input" 
          id="centerText" 
          name="centerText" 
          type="text" 
          maxLength="120" 
          placeholder="And it's due at 12" 
          aria-label="center Text"
          value={props.text.centerText}
          onChange={(event) => props.click(event.target.name, event.target.value)}
          ></input>
        </div>

        <div className="field">
          <label htmlFor="bottomText">Bottom text</label>
          <input 
          className="txt-input" 
          id="bottomText" 
          name="bottomText" 
          type="text" 
          maxLength="120" 
          placeholder="The time now is 11:45" 
          aria-label="Bottom text"
          value={props.text.bottomText}
          onChange={(event) => props.click(event.target.name, event.target.value)}
          ></input>
        </div>
        


      </form>
    </section> 
  )
}