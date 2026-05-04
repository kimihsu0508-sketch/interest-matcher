// matchingAPI.js

const BASE_URL = 'https://api.example.com/matching';

export const getMatches = async (userId) => {
    const response = await fetch(`${BASE_URL}/matches/${userId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch matches');
    }
    return await response.json();
};

export const createMatch = async (matchData) => {
    const response = await fetch(`${BASE_URL}/matches`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(matchData),
    });
    if (!response.ok) {
        throw new Error('Failed to create a match');
    }
    return await response.json();
};

export const deleteMatch = async (matchId) => {
    const response = await fetch(`${BASE_URL}/matches/${matchId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete the match');
    }
    return await response.json();
};
