import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import Password from '../Password'

const userNames = []

class Manager extends Component {
  state = {
    web: '',
    user: '',
    pass: '',
    userList: userNames,
    searchInput: '',
    checkbox: false,
  }

  webstate = event => {
    this.setState({web: event.target.value})
  }

  userstate = event => {
    this.setState({user: event.target.value})
  }

  passstate = event => {
    this.setState({pass: event.target.value})
  }

  submitOf = event => {
    event.preventDefault()
    console.log('ok done')

    const {web, user, pass} = this.state
    const userDetails = {
      id: uuidv4(),
      web,
      user,
      pass,
      delete: false,
    }
    this.setState(prevState => ({
      userList: [...prevState.userList, userDetails],
      web: '',
      user: '',
      pass: '',
    }))
  }

  searchList = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteList = id => {
    this.setState(prevState => ({
      userList: prevState.userList.filter(eachList => eachList.id !== id),
    }))
  }

  checkBox = () => {
    this.setState(prevState => ({checkbox: !prevState.checkbox}))
  }

  render() {
    const {web, user, pass, userList, searchInput, checkbox} = this.state
    console.log(checkbox)
    const finalResults = userList.filter(run =>
      run.web.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const longArray = finalResults.length
    return (
      <div className="bg-container">
        <div className="logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logoimg"
          />
        </div>
        <div className="top-box">
          <div className="top-small">
            <form onSubmit={this.submitOf}>
              <h1>Add New Password</h1>
              <div className="inputs">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="web"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.webstate}
                  value={web}
                />
              </div>

              <br />
              <div className="inputs">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                  alt="username"
                  className="web"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.userstate}
                  value={user}
                />
              </div>

              <br />
              <div className="inputs">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="web"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.passstate}
                  value={pass}
                />
              </div>
              <br />
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="image11"
            />
          </div>
        </div>
        <div className="bottom-box">
          <div className="btm-box1">
            <div className="flexxx">
              <h1>Your Passwords</h1>
              <p className="span">{longArray}</p>
            </div>
            <div className="inputs">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="web"
              />
              <input
                type="search"
                className="input1"
                placeholder="search"
                onChange={this.searchList}
              />
            </div>
          </div>
          <hr />
          <div>
            <div className="check">
              <input
                type="checkbox"
                id="Audi"
                value="Show Passwords"
                className="checkBox"
                onChange={this.checkBox}
              />
              <label htmlFor="Audi" className="checkName">
                Show Passwords
              </label>
            </div>
            <ul>
              {longArray > 0 ? (
                finalResults.map(eachItem => (
                  <Password
                    list={eachItem}
                    key={eachItem.id}
                    deleteList={this.deleteList}
                    checkbox={checkbox}
                  />
                ))
              ) : (
                <>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    className="image11"
                    alt="no passwords"
                  />
                  <p>No Passwords</p>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Manager
