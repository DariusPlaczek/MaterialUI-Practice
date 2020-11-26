import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const API_URL = process.env.API_USERS;

function UserProfile(props) {
    const [users, setUsers] = useState('')
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchValueCache, setSearchValueCache] = useState([])
    const { id } = useParams();

    useEffect(() => {
      fetch('http://localhost:3000/users.json')
     .then((response) => response.json())
     .then(
      (result) => {
        setIsLoaded(true);
        setUsers(result.results[id]);
      },
      (error) => {
        setIsLoaded(true);
        setError(error)
      });
    }, [])


    const userProfile = () => {
      if (error) {
        return <div>Error: {error.Message}</div>
      }

      if (!isLoaded) {
        return <div>...isLoading</div>
      } else {
         console.log(users.name);
        // return (
        // <div>{`${users.gender}`}</div>
        // )

        // return (
        //   <div className="col-2">
        //   <img className="list-image" alt={users.name.first} src={users.picture.large} />
        //     <div className="another-column">
        //       <h5>{users.name.title}</h5>
        //       <h3>{users.name.first} {users.name.last}</h3>
        //       <h5>{users.gender}</h5>
        //       <br />
        //       <h4>{users.email}</h4>
        //       <h4>{users.phone}</h4>
        //       <br />
        //       <h4>{users.location.postcode} {users.location.city}</h4>
        //       <h4>{users.location.state}</h4>
        //     </div>
        //   </div>
        // );
      }
    }


    return (
         <div className="userlist-container" >
           {userProfile()}
        </div>
    )
}

export default UserProfile
