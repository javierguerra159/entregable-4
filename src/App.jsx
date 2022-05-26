import { useEffect, useState } from 'react'

import './App.css'
import UsersForm from './components/UsersForm'
import axios from 'axios'
import UsersList from './components/UsersList'

function App() {

  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState(null)
  useEffect(() =>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))
  },[])

  const getUser = () =>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))
  }

  const selectUser = user => setUserSelected(user)
  const deselectUser = () => setUserSelected(null)
  const removeUser = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() =>getUser())
  }

  return (
    <div className="App">

      <UsersForm 
        getUser={getUser} 
        userSelected={userSelected} 
        deselectUser={deselectUser}
        
      />
      <UsersList 
        users={users} 
        selectUser={selectUser}
        removeUser={removeUser}
      />
    </div>
  )
}

export default App
