import {Component} from 'react'

import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onDecrease = value =>
    this.setState(prevState => ({amount: prevState.amount - value}))

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <div className="initial-container">
              <h1 className="letter-s">{initial}</h1>
            </div>
            <h1 className="name">{name}</h1>
          </div>

          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div className="amount-container">
              <p className="amount">
                {amount}
                <br />
                <span className="in-rupees">In Rupees</span>
              </p>
            </div>
          </div>

          <p className="withdraw">Withdraw</p>
          <p className="sum-in-rupees-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationsList={eachItem}
                key={eachItem.id}
                onDecrease={this.onDecrease}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
