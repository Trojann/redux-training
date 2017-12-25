function sum(currentState, action) {
  var DEFAULT_STATE = 0;
  if (currentState === undefined) {
    nextState = DEFAULT_STATE;
    return nextState;
  }

  switch(action.type) {
    case 'SUM':
      nextState = parseInt(action.a) + parseInt(action.b);
      funcWithErr();
      return nextState
    default:  
      nextState = currentState; 
      return nextState;
  }
} 

function funcWithErr() {
  throw Error('An error from SUM action')
}