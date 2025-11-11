import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();
  const [enterPlayerName, setEnterPlayerName] = useState(null);

  function updateName() {
    if (playerName.current.value) {
      setEnterPlayerName(playerName.current.value)
      playerName.current.value = '';
    }
  }
  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ?? 'Player'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={updateName}>Set Name</button>
      </p>
    </section>
  );
}
