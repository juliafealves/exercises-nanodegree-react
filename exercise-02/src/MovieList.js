import React from 'react';
import UserList from './UserList';

function MovieList(props) {
    const {users, movies, usersByMovies} = props;

    return (
        <ul>
            {Object.keys(movies).map(id => (
                <li>
                    <h2 key={id}>{movies[id].name}</h2>
                    <UserList users={users} usersByMovies={usersByMovies[id]} />
                </li>
            ))}
        </ul>
    );
}

export default MovieList;