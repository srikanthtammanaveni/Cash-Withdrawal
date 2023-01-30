// Write your code here
import './index.css'

const DenominationItem = props => {
  const {item, add} = props

  const {value} = item

  const addBalance = () => {
    add(value)
  }

  return (
    <li className="button-container">
      <button type="button" className="button" onClick={addBalance}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
