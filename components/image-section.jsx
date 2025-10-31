import React from "react"


export default function ImageSection(props) {


  return (
    <section id="preview" className="panel preview" aria-labelledby="previewLabel">
      <h3 id="previewLabel">Preview</h3>

      <figure className="meme-wrap" role="img" aria-label="Meme preview">
          
          {props.meme ? (
              <div className="relative-txt-cont">
                <img src={props.meme.blank} alt={props.meme.name} />
               
                {props.text.topText ? ( 
                <p className="meme-txt top-txt"
                style={{ color: props.text.textColor,
                  WebkitTextStroke: `1px ${props.text.textBorder}`
                 }}
                >{props.text.topText}</p>) : (null)}

                
                {props.text.centerText ? ( 
                <p className="meme-txt center-txt"
                style={{ color: props.text.textColor,
                  WebkitTextStroke: `1px ${props.text.textBorder}`
                 }}
                >{props.text.centerText}</p> ) : (null)}
                
                
                {props.text.bottomText ? ( 
                <p className="meme-txt bottom-txt"
                style={{ color: props.text.textColor,
                  WebkitTextStroke: `1px ${props.text.textBorder}`
                 }}
                >{props.text.bottomText}</p> ) : (null)}


              </div>
            ) : (
              <p>Loading meme...</p>
          )}
          
      </figure>


    </section>
  )
}