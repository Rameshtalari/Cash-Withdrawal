import './index.css'

const DenominationItem = props => {
  const {denominationsList, onDecrease} = props
  const {value} = denominationsList

  const onChangeAmount = () => {
    onDecrease(value)
  }

  return (
    <li className="denomination-item">
      <button
        className="button"
        type="button"
        value={value}
        onClick={onChangeAmount}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
