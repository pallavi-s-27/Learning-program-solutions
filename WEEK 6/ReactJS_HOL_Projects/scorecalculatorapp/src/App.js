import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore name="Alice" school="Oxford High" total={450} goal={5} />
    </div>
  );
}

export default App;
