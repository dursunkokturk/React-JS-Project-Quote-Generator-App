import Dice from './assets/img/dice.png'
import './App.css'
import { useEffect, useState } from 'react'

export default function App() {

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  // Tavsiye Numarasi
  const [index, setIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then(response => {
        if (!response.ok) throw new Error("Sunucuya Ulaşılamadı")
        return response.json()
      })
      // .then(response => response.json())
      // .then(console.log)
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.quotes.length)

        // Tum Alinti Listesini Kaydediyoruz
        setQuotes(data.quotes)

        // Rastgele Numara Seciyoruz
        setQuote(data.quotes[randomIndex])

        // Secilen Numara Alintinin Id'si Oluyor
        setIndex(data.quotes[randomIndex].id)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      }

      )
  }, [])

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[randomIndex])
    setIndex(quotes[randomIndex].id)
  }

  return (
    <>
      <div className="container">
        <div className="text-and-figures">
          <h6>TAVSİYE #{index ?? '...'}</h6>
          <figure className='quote-card'>
            {loading ? (
              <div className="loading">
                <div className="loading-spinner"></div>
                <p>Yükleniyor...</p>
              </div>
            ) : error ? (
              <div className="error">
                <p className="error-icon">⚠</p>
                <p className="error-text">Bir hata oluştu</p>
                <p className="error-detail">{error}</p>
              </div>
            ) : (
              <>
                <blockquote>
                  "{quote.quote}"
                </blockquote>
                <figcaption>
                  <cite>— {quote.author}</cite>
                </figcaption>
              </>
            )}
          </figure>
          <div className="lines-and-ovals">
            <div className="line-left"></div>
            <div className="oval-left"></div>
            <div className="oval-right"></div>
            <div className="line-right"></div>
          </div>
          <div
            className="circle"
            onClick={getRandomQuote}
          >
            <img src={Dice} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}