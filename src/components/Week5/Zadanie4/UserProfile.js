import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';


function UserProfile() {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [prevUser, setPrevUser] = useState(false);
  const [nextUser, setNextUser] = useState(false);
  const [userLength, setUserLength] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    try {
    fetch('http://localhost:3000/user.json')
  //    fetch(`http://localhost:3000/userData.json/${id}`)
      .then((response) => response.json())
      .then(
        (result) => {
         setUsers(result.results[id]);
         setUserLength(result.results);
    
           setIsLoaded(true);
        })
      } catch(error) {
        console.log(error);
      }
  }, [id]);

  useEffect(() => {
    if (parseInt(id) === userLength.length-1) {
      setNextUser(true)
      return
    } else {
      setNextUser(false);
    }

    if (id === '0') {
      setPrevUser(true)
      return
    } else {
      setPrevUser(false)
    }
  }, [userLength, id])

  const userProfile = () => {

    if (!isLoaded && !users.name) {
      return <div>Loading...</div>;
    } else {
      return (

        <div className="user">
          <h1>User Profile</h1>
          <div className="userlist-container borderTop" >
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
          <div className="footer-user borderTop">
            <NavLink to={`/users/${parseInt(id)-1}`}><button disabled={prevUser}>PREVIOUS USER</button></NavLink>
            <NavLink to="/users"><button >BACK TO USERS</button></NavLink>
            <NavLink to={`/users/${parseInt(id)+1}`}><button disabled={nextUser}>NEXT USER</button></NavLink>
          </div>
        </div>
      )
    }
  };

  return <div className="App">{userProfile()}</div>;
}

export default UserProfile
