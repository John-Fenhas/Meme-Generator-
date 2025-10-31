import React from "react"
import ImageSection from "./image-section";
import TextSection from "./text-section";

export default function MainContent() {

  const [memeImagesData, setMemeImagesData] = React.useState([]);
  const [randomMeme, setRandomMeme] = React.useState(null);
  const [text, setText] = React.useState({
    topText: "",
    centerText: "",
    bottomText: "",
    textColor: "white",
    textBorder: "black"
  })  

  
  React.useEffect(() => {
    fetch("https://api.memegen.link/templates/")
    .then(res => res.json())
    .then(data => {
      const defaultPositionTemplates = data.filter(t => t.lines === 2);
      console.log(defaultPositionTemplates);
      setMemeImagesData(defaultPositionTemplates)
    });
  }, []);
  

  function updateText(name, value) {
    if (name === "bottomText") {
      setText(prevText=> ({...prevText, bottomText:value }))
    }
      if (name === "centerText") {
      setText(prevText=> ({...prevText, centerText:value }))
    }
      if (name === "topText") {
      setText(prevText=> ({...prevText, topText:value }))
    }     
  }

  function toggleTextColor() {
    setText(prevText => {
    let color = text.textColor === "white" ? "black" : "white"
    return {...prevText, textColor:color}
    })
    setText(prevText => {
    let color = text.textBorder === "white" ? "black" : "white"
    return {...prevText, textBorder:color}
    })
  }

  function getNewMeme() {
    const randomIndex = Math.floor(Math.random() * memeImagesData.length);
    const random = memeImagesData[randomIndex];
    setRandomMeme(random)
 }






  return (
  <main className="container main-grid" id="main" aria-labelledby="mainHeading">
  
  <TextSection
    text = {text}
    click = {updateText}
    toggleColor = {toggleTextColor}
    newMeme = {getNewMeme}
  />

  <ImageSection 
    meme = {randomMeme}
    text = {text}
    toggleText = {toggleTextColor}



    
  />    


  </main>
  )
}