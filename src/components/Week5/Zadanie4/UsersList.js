import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'


function UsersList() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchValueCache, setSearchValueCache] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/users.json')
   .then((response) => response.json())
   .then(
    (result) => {
      setIsLoaded(true);
      setUsers(result.results);
    },
    (error) => {
      setIsLoaded(true);
      setError(error)
    });
  }, [])

  useEffect(() => {
    if (searchValue.trim() === '') {
      setFilteredUsers(users);
      return;
    }
    setFilteredUsers(users.filter(user => user.name.first.toLowerCase().includes(searchValue.trim())));
  }, [searchValue, users]);


  const usersList = () => {
    if (error) {
      return <div>Error: {error.Message}</div>
    }

    if (!isLoaded) {
      return <div>...isLoading</div>
    } else {
      return filteredUsers.map((value, id )=> (
        <NavLink to={`/users/${value.id}`} key={id}>
          <div className="userlist-container" >
            <div className="col-2">
            <img className="list-image" alt={value.name.first} src={value.picture.large} />
              <div className="another-column">
                <h5>{value.name.title}</h5>
                <h3>{value.name.first} {value.name.last}</h3>
                <h5>{value.gender}</h5>
                <br />
                <h4>{value.email}</h4>
                <h4>{value.phone}</h4>
                <br />
                <h4>{value.location.postcode} {value.location.city}</h4>
                <h4>{value.location.state}</h4>
              </div>
            </div>
          </div>
        </NavLink>
      ))
    }
  }

  const usersSearch = (event) => {
    setSearchValue(searchValueCache.toLowerCase());
    event.preventDefault();
  }

  return (
    <div className="user">
      <h1>Users</h1>
      <form onSubmit={usersSearch}>
        <input type="text" placeholder="Search name" onChange={(event) => setSearchValueCache(event.target.value)}/>
        <button>SEARCH</button>
      </form>
      <div className="list-wrapper borderTop" >
        {usersList()}
      </div>
    </div>
  )
}

export default UsersList
