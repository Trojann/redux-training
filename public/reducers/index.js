combineReducers = (currentState, action) => {
  var nextState = {...currentState};
  return {
    count: counter(nextState.count, action),
    sum: sum(nextState.sum, action),
    images: images(nextState.images, action)
  }
}