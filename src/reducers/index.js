export const AddToTarget={ 
  type: 'INCREMENT',
  payload: 1 
}
  
export const DecrementToTarget={
  type: 'DECREMENT',
  payload: 1, 
}

export const messsageReducer = (state={},action)=>{
  switch(action.type){
    default:return state;
  }
}

const karmaReducer = (state=0,action)=>{
  switch(action.type){
      case 'INCREMENT':
      return state+action.payload
      case 'DECREMENT':
      return state-action.payload
      default: return state;
  }
}

export default karmaReducer;