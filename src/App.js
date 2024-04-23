import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {searchInputValue: '', userDetailsList: initialUserDetailsList}

  onChangeSearchInput = event => {
    this.setState({searchInputValue: event.target.value})
  }

  onDeleteUser = uniqueNo => {
    const {userDetailsList} = this.state
    const deletedFilterUserData = userDetailsList.filter(
      eachUser => eachUser.uniqueNo !== uniqueNo,
    )
    this.setState({userDetailsList: deletedFilterUserData})
  }

  render() {
    const {searchInputValue, userDetailsList} = this.state
    const searchResult = userDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInputValue),
    )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          value={searchInputValue}
          onChange={this.onChangeSearchInput}
        />
        <ul className="list-container">
          {searchResult.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              onDeleteUser={this.onDeleteUser}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
