import Dice from './assets/img/dice.png'
import './App.css'
import { useEffect, useState } from 'react'

export default function App() {

  const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then(response => response.json())
      .then(console.log);
  })

  return (
    <>
      <div className="container">
        <div className="text-and-figures">
          <h6>TAVSİYE #117</h6>
          <figure className='quote-card'>
            <blockquote>
              “Dikkatini verip farkına varmak kolaydır, zor olan ise ayağa kalkıp harekete geçmektir.”
            </blockquote>
            <figcaption>
              <cite>-Alıntı Sahibi</cite>
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