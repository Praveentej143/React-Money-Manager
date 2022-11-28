// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expenseAmount} = props

  return (
    <div className="main-container">
      <div className="money-details-container">
        <div className="balance-amount-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="balance-img"
          />
          <div className="amount-container">
            <p className="bal-desc">Your Balance</p>
            <p className="bal-amount" testid="balanceAmount">
              Rs {balanceAmount}
            </p>
          </div>
        </div>
        <div className="income-amount-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="income-img"
          />
          <div className="amount-container">
            <p className="bal-desc">Your Income</p>
            <p className="bal-amount" testid="incomeAmount">
              Rs {incomeAmount}
            </p>
          </div>
        </div>
        <div className="expenses-amount-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="expenses-img"
          />
          <div className="amount-container">
            <p className="bal-desc">Your Expenses</p>
            <p className="bal-amount" testid=" expensesAmount">
              Rs {expenseAmount}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
