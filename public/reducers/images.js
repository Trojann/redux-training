images = (currentState, action) => {
	var DEFAULT_STATE = {data:[], loading:"Please click Random Images's button"};
	var nextState = {...currentState};
	if (currentState === undefined) {
    	nextState = DEFAULT_STATE;
    	return nextState;
  	}
  	switch(action.type) {
    case 'IMAGES':
      	nextState.data = action.data;
      	nextState.loading = 'loaded';
      	return nextState
    case 'IMAGES_LOADING':
      	nextState.loading = 'loading...';
      	return nextState
    default: 
      	nextState = currentState; 
      	return nextState;
  	}

}