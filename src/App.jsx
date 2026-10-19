import { useEffect, useState } from 'react'
import './App.css'
import CoinInfo from './components/CoinInfo'

function App() {
  const [list, setList] = useState(null)
  const API_KEY = import.meta.env.VITE_APP_API_KEY

  useEffect(() => {
    const fetchTopCoins = async() => {
      const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1", {
        headers: {
          'x-cg-demo-api-key': API_KEY
        }
      })
      const data = await response.json();
      setList(data);
      console.log(data);
    }
    fetchTopCoins().catch((console.errors));
  }, []);

  return (
    <div className='whole-page'>
      <h1>Top Coins by Market Cap</h1>
      <input placeholder='Search...'/>
        {list && list?.map((coin) => (
          <CoinInfo 
            id={coin.id}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
          />
        ))}
    </div>
  )
}

export default App
