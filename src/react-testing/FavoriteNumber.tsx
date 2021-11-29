import React from 'react';

export function FavoriteNumber({ min = 1, max = 9 }) {
  const [number, setNumber] = React.useState(0);

  const [numberIsEntered, setNumberIsEntered] = React.useState(false);

  function handleChange(event: any) {
    setNumber(event.target.value);
    setNumberIsEntered(true);
  }

  const isValid = !numberIsEntered || (number >= min && number <= max);

  return (
    <div>
      <label htmlFor="favorite-number">Favorite Number</label>

      <input
        onChange={handleChange}
        type="number"
        id="favorite-number"
        value={number}
      />

      {isValid ? null : <div role="alert">The number is invalid.</div>}
    </div>
  );
}

export default FavoriteNumber;
