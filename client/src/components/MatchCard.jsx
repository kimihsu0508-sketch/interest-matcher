import React from 'react';

const MatchCard = ({ user }) => {
    return (
        <div className="match-card">
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <p>Email: {user.email}</p>
            <p>Interests: {user.interests.join(', ')}</p>
        </div>
    );
};

export default MatchCard;
