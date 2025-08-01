// App.js
import React from 'react';

const App = () => {
  const officeList = [
    { name: 'Space A', rent: 55000, address: 'Bangalore' },
    { name: 'Space B', rent: 72000, address: 'Mumbai' },
    { name: 'Space C', rent: 48000, address: 'Delhi' }
  ];

  return (
    <div>
      <h1>Office Space Rentals</h1>
      <img src="https://via.placeholder.com/150" alt="Office Space" />
      <ul>
        {officeList.map((office, index) => (
          <li key={index}>
            {office.name} - 
            <span style={{ color: office.rent > 60000 ? 'green' : 'red' }}>
              ₹{office.rent}
            </span> - {office.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
