import React from 'react';



export const AddPost=(text)=>({
  type: 'POST_ADDED',
  payload: text
})