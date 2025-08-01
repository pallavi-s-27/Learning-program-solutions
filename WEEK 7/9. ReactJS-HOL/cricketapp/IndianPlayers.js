import React from 'react';

const IndianPlayers = () => {
  const T20 = ['Rohit', 'Kohli', 'Surya'];
  const Ranji = ['Jadeja', 'Pujara', 'Rahane'];
  const allPlayers = [...T20, ...Ranji];
  const [a, b, c, d, e, f] = allPlayers;

  return (
    <div>
      <h3>Even Team Players</h3>
      <ul>{[a, c, e].map((p, i) => <li key={i}>{p}</li>)}</ul>
      <h3>Odd Team Players</h3>
      <ul>{[b, d, f].map((p, i) => <li key={i}>{p}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;