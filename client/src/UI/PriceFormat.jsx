
const PriceFormat = ({price}) => {
    const format = new Number(price).toLocaleString("un-us",{
        style:"currency",
        currency:"usd",
        minimumFractionDigits:2
    })
  return (
    <div>{format}</div>
  )
}

export default PriceFormat