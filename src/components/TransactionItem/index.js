// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {title, amount, id, type} = transactionDetails

  const deleteTransactionId = () => {
    deleteTransaction(id)
  }

  return (
    <li className="table-row">
      <div className="table-data">
        <p className="transaction-text table-cell">{title}</p>
        <p className="amount-text table-cell">{amount}</p>
        <p className="amount-type-text table-cell">{type}</p>
      </div>

      <div className="delete-container">
        <button
          className="delete-btn"
          testid="delete"
          onClick={deleteTransactionId}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
