import React, { useState } from 'react';
import './MatchResults.css'; // Assuming there's a CSS file for styles

const MatchResults = ({ matchedUsers }) => {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredUsers = matchedUsers.filter(user =>
        user.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="match-results">
            <h1>Matched Users</h1>
            <input
                type="text"
                placeholder="Filter by name..."
                value={filter}
                onChange={handleFilterChange}
            />
            <div className="user-cards">
                {filteredUsers.map(user => (
                    <div key={user.id} className="user-card">
                        <h2>{user.name}</h2>
                        <p>{user.description}</p>
                        <button>View Profile</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MatchResults;
