import Dice from './assets/img/dice.png'
import './App.css'
import { useEffect, useState } from 'react'

export default function App() {

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  // Tavsiye Numarasi
  const [index, setIndex] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then(response => response.json())
      // .then(console.log);
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.quotes.length)

        // Rastgele Numara Seciyoruz
        setQuote(data.quotes[randomIndex])

        // Secilen Numara Alintinin Id'si Oluyor
        setIndex(data.quotes[randomIndex].id)
      })
  }, [])

  return (
    <>
      <div className="container">
        <div className="text-and-figures">
          <h6>TAVSİYE #{index ?? '...'}</h6>
          <figure className='quote-card'>
            <blockquote>
              "{quote ? quote.quote : 'Yükleniyor...'}"
            </blockquote>
            <figcaption>
              <cite>— Alıntı Sahibi</cite>
            </figcaption>
          </figure>
          <div className="lines-and-ovals">
            <div className="line-left"></div>
            <div className="oval-left"></div>
            <div className="oval-right"></div>
            <div className="line-right"></div>
          </div>
          <div className="circle" >
            <img src={Dice} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}