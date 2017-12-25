function counter(currentState, action) {
  var DEFAULT_STATE = 0;
  if (currentState === undefined) {
    nextState = DEFAULT_STATE;
    return nextState;
  }

  switch(action.type) {
    case 'DECREMENT':
      nextState = currentState - 1;
      return nextState
    case 'INCREMENT':
      nextState = currentState + 1;
      return nextState
    default: 
      nextState = currentState; 
      return nextState;
  }
}
