// Write your code here

import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {count: 2000}

  addMoney = value => {
    this.setState(prevState => ({count: prevState.count - value}))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    return (
      <div className="app-container">
        <div className="content-container">
          <div className="profile-container">
            <div className="profile-icon-container">
              <h1 className="profile-icon">S</h1>
            </div>
            <div className="name-container">
              <h1 className="name">Sarah Williams</h1>
            </div>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <p className="name">
              {count}
              <br /> <span className="balance">In rupees</span>
            </p>
          </div>
          <div className="withdraw-container">
            <p className="withdraw">Withdraw</p>
            <p className="some-rupees">CHOOSE SUM (IN RUPEES)</p>
            <ul className="deposite-container">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  item={eachDenomination}
                  key={eachDenomination.id}
                  add={this.addMoney}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
