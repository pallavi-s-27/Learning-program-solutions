import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const { name, school, total, goal } = props;
  const average = total / goal;

  return (
    <div className="card">
      <h2>Student Name: {name}</h2>
      <h3>School: {school}</h3>
      <h4>Total Marks: {total}</h4>
      <h4>Goal Subjects: {goal}</h4>
      <h3>Average Score: {average.toFixed(2)}</h3>
    </div>
  );
}

export default CalculateScore;
