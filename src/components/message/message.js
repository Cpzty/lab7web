import React from 'react';

const MessageCreator= ({value,onSubmit,comments})=>(
  <div>
    <input type='text'/>
    <p>{value}</p>
    <button onClick={onSubmit}>Create Post</button>
  </div>
);

export default MessageCreator;