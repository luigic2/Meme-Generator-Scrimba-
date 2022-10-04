import React from "react"
import memesData from "../memesData.js"

export default function Meme() {


    const [memeImage, setMemeImage] = React.useState({
        topText: "Texto de Cima",
        bottomText: "Texto de Baixo",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [memeContent, setmemeContent] = React.useState({



    })

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(x => ({

            ...x,
            randomImage: memesArray[randomNumber].url
        }))

    }
    const topText1Change = event => {
        console.log(event.target.value)
        setMemeImage(x => ({
            ...x,
            topText: event.target.value
        }))
    }
    const bottomText1Change = event => {
        console.log(event.target.value)
        setMemeImage(x => ({
            ...x,
            bottomText: event.target.value
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    id="form__toptext1"
                    onChange={topText1Change}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    id="form__bottomtext1"
                    onChange={bottomText1Change}
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme__div">
                <p className="meme__text meme__text__top">{memeImage.topText}</p>
                <p className="meme__text meme__text__bottom">{memeImage.bottomText}</p>
                <img src={memeImage.randomImage} className="meme--image" />
            </div>
        </main>
    )
}