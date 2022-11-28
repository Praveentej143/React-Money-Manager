import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    transactionsList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getExpense = () => {
    const {transactionsList} = this.state
    let expenseAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expenseAmount += eachTransaction.amount
      }
    })
    return expenseAmount
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    let expenseAmount = 0
    let balanceAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expenseAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expenseAmount

    return balanceAmount
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(
        each => each.id !== id,
      ),
    }))
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, transactionsList, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  render() {
    const {titleInput, amountInput, transactionsList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expenseAmount = this.getExpense()

    return (
      <>
        <div className="bg-container">
          <div className="card-container">
            <div className="welcome-card-container">
              <h1 className="welcome-card-heading">Hi, Richard</h1>
              <p className="welcome-card-desc">
                Welcome back to your{' '}
                <span className="money-tag">Money Manager</span>
              </p>
            </div>
            {/* money details goes here */}
            <MoneyDetails
              balanceAmount={balanceAmount}
              incomeAmount={incomeAmount}
              expenseAmount={expenseAmount}
            />
            {/* transactions goes here */}

            <div className="transaction-main-container">
              <div className="transaction-container">
                <h1 className="trans-card-heading">Add Transaction</h1>
                <form className="form" onSubmit={this.onAddTransaction}>
                  <label className="trans-title" htmlFor="title">
                    TITLE
                  </label>
                  <br />
                  <input
                    type="text"
                    id="title"
                    placeholder="TITLE"
                    className="title-input"
                    value={titleInput}
                    onChange={this.onChangeTitle}
                  />
                  <br />
                  <label className="trans-title" htmlFor="amount">
                    AMOUNT
                  </label>
                  <br />
                  <input
                    type="text"
                    id="amount"
                    placeholder="AMOUNT"
                    className="amount-input"
                    value={amountInput}
                    onChange={this.onChangeAmount}
                  />
                  <br />
                  <label className="amount-type" htmlFor="amount-types">
                    TYPE
                  </label>
                  <br />
                  <select
                    id="amount-types"
                    className="select-type-amount"
                    onChange={this.onChangeOptionId}
                  >
                    {transactionTypeOptions.map(eachOption => (
                      <option
                        key={eachOption.optionId}
                        value={eachOption.optionId}
                      >
                        {eachOption.displayText}
                      </option>
                    ))}
                  </select>
                  <br />
                  <button className="add-transaction-btn" type="submit">
                    Add
                  </button>
                </form>
              </div>
              <div className="history-main-container">
                <div className="history-container">
                  <h1 className="history-transaction-heading">History</h1>
                  <div className="transactions-table-container">
                    <ul className="transactions-table">
                      <li className="table-header">
                        <p className="table-header-cell cell">Title</p>
                        <p className="table-header-cell">Amount</p>
                        <p className="table-header-cell">Type</p>
                      </li>
                      {transactionsList.map(eachTransaction => (
                        <TransactionItem
                          key={eachTransaction.id}
                          transactionDetails={eachTransaction}
                          deleteTransaction={this.deleteTransaction}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default MoneyManager
