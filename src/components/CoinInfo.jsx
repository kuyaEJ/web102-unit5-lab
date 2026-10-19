const CoinInfo = ({id, image, name, symbol, price}) => {
  return (
    <>
    {price != null ? (
      <li className="main-list" key={`item${id}`}>
        <img key={`image${id}`}className="img" src={image} alt={`Coin image for ${symbol}`} key={id}/>
        <strong key={`bold${id}`}>{name}</strong> Price: ${price} USD
      </li>
      ) : (
        <></>
      )
    }
    </>
  )
}
export default CoinInfo