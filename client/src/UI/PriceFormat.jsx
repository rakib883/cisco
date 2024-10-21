import { twMerge } from 'tailwind-merge';
const PriceFormat = ({price,className}) => {
    const format = new Number(price).toLocaleString("un-us",{
        style:"currency",
        currency:"usd",
        minimumFractionDigits:2
    })
  return (
    <span className={twMerge('', className ? className :"")}>{format}</span>
  )
}

export default PriceFormat