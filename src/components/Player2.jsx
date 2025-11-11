import { useState } from 'react';

export default function Player() {
  const [enterPlayerName, setEnterPlayerName] = useState('');
  const [playerName, setPlayerName] = useState('');

  function handleChange(e) {
    setEnterPlayerName(e.target.value);
  }
  function updateName() {
    setPlayerName(enterPlayerName);
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName: 'Player'}</h2>
      <p>
        <input type="text" value={enterPlayerName} onChange={handleChange} />
        <button onClick={updateName}>Set Name</button>
      </p>
    </section>
  );
}
