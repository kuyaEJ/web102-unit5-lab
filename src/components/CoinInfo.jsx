const CoinInfo = ({id, image, name, symbol, price}) => {
  return (
    <>
    {price != null ? (
      <li className="main-list">
        <img className="coinImage" src={image} alt={`Coin image for ${symbol}`}/>
        <div className="coinName">{name}</div>
        <div className="coinPrice">Price: ${price} USD</div>
      </li>
      ) : (
        <></>
      )
    }
    </>
  )
}
export default CoinInfo