import React from 'react';
const Karma = ({value,AddToTarget,DecrementToTarget}) =>(
  <div>
  <h1>{value}</h1>
  <button onClick={AddToTarget}>Like</button>
  <button onClick={DecrementToTarget}>Dislike</button>
  </div>
);

export default Karma;