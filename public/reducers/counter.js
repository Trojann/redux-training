var DEFAULT_STATE = {result: 0, loading:false};

counter = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case 'DECREMENT':
      // catchErr();
      return {...state, result: state.result - 1}
    case 'INCREMENT':
      return {...state, result: state.result + 1, loading: false}
    case 'INCREMENT_LOADING':
      return {...state, loading: true}
    default: 
      return state;
  }
}

catchErr = () => {throw Error('An error from DECREMENT action')}