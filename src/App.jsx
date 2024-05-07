import { useState } from 'react';
import { puppyList } from './data.js';
import './index.css';

function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(puppyId) {
    const clickedPuppy = puppyList.find(puppy => puppy.id ===puppyId);
  setFeatPupId(clickedPuppy.id);
  }

  return (
    <div className="App">
      {featPupId && (
        <div>
          <h2>Featured Pup: {puppyList.find(puppy => puppy.id === featPupId).name}</h2>
        </div>
      )}
      {puppies.map((puppy) => {
        return (
          <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}

export default App
