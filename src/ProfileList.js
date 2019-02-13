import React from 'react';

function ProfileList(props) {
    return (
        <div>
            {props.profiles.map(profile => (
                <p key={profile.id}>{`${profile.user.name}'s favorite movie is ${profile.movie.name}.`}</p>
                ))}
        </div>
    );
}

export default ProfileList;