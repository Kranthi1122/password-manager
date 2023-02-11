import './index.css'

const Password = props => {
  const {list, deleteList, checkbox} = props
  const {web, user, pass, id} = list
  const deleteButton = () => {
    deleteList(id)
  }
  const result = checkbox ? (
    <p>{pass}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  )
  return (
    <li className="list">
      <div>
        <p>{web}</p>
        <p>{user}</p>
        {result}
      </div>
      <button type="button" onClick={deleteButton} testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default Password
