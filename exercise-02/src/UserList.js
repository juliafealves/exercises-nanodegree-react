import React from 'react';

function UserList(props) {
    const {users, usersByMovies} = props;

    if(!usersByMovies || usersByMovies.length === 0) {
        return (<p>None of the current users liked this movie</p>);
    }
    
    return(
        <div>
            <p>Liked By:</p>
            <ul>
                {usersByMovies.map(idUser => <li key={users[idUser].id}>{users[idUser].name}</li>)}
            </ul>
        </div>
    );
}

export default UserList;