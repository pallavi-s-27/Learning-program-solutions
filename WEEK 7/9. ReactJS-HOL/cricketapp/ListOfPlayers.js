import React from 'react';

const players = [
  { name: 'Virat', score: 95 },
  { name: 'Rohit', score: 88 },
  { name: 'Dhoni', score: 67 },
  { name: 'Rahul', score: 45 },
  { name: 'Jadeja', score: 78 },
  { name: 'Shami', score: 60 },
  { name: 'Ashwin', score: 92 },
  { name: 'Bumrah', score: 81 },
  { name: 'Hardik', score: 33 },
  { name: 'Surya', score: 72 },
  { name: 'Gill', score: 58 },
];

const ListOfPlayers = () => {
  const filtered = players.filter(p => p.score >= 70);
  return (
    <div>
      <h2>Players with score ≥ 70</h2>
      <ul>
        {filtered.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;