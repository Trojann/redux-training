sum = (state = 0, action) => {
  switch(action.type) {
    case 'SUM':
      // funcWithErr();
      return parseInt(action.a) + parseInt(action.b);
    default:  
      return state
  }
} 

funcWithErr = () => {
  throw Error('An error has occured with SUM action')
}