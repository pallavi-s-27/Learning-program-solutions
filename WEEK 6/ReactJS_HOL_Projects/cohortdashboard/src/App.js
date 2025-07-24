import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails name="React Batch 1" status="ongoing" />
      <CohortDetails name="Java Batch 2" status="completed" />
    </div>
  );
}

export default App;
