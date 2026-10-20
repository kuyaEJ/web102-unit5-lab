import '../App.css'

const CoinInfo = ({id, image, name, symbol, price}) => {
  return (
    <>
    {price != null ? (
      <li className="main-list">
        <div className='coinContainer'>
          <img className="coinImage" src={image} alt={`Coin image for ${symbol}`}/>
          <div className="coin">
            <div className="coinName">{name}</div>
            <div className="coinSymbol">{symbol}</div>
          </div>
          <div className="coinPrice">${price.toLocaleString()} USD</div>
        </div>
      </li>
      ) : (
        <></>
      )
    }
    </>
  )
}
export default CoinInfo