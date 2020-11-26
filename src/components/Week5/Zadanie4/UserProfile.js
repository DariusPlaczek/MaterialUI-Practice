import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function UserProfile() {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    try {
      fetch('http://localhost:3000/users.json')
      .then((response) => response.json())
      .then(
        (result) => {
          setUsers(result.results[id]);
          setIsLoaded(true);
        })
      } catch(error) {
        console.log(error);
      }
  }, [id]);

  const userProfile = () => {

    if (!isLoaded && !users.name) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
        <h1>User Profile</h1>
        <div className="userlist-container" >
          <div className="col-2">
          <img className="list-image" alt={users.name.first} src={users.picture.large} />
            <div className="another-column">
              <h5>{users.name.title}</h5>
              <h3>{users.name.first} {users.name.last}</h3>
              <h5>{users.gender}</h5>
              <br />
              <h4>{users.email}</h4>
              <h4>{users.phone}</h4>
              <br />
              <h4>{users.location.postcode} {users.location.city}</h4>
              <h4>{users.location.state}</h4>
            </div>
          </div>
        </div>
      </>
      )
    }
  };

  return <div className="App">{userProfile()}</div>;
}

export default UserProfile
