let DEFAULT = {data:[], loading:"Please click Random Images's button"};
images = (state = DEFAULT, action) => {
  switch(action.type) {
    case 'IMAGES':
    	return {...state, data:action.data, loading:'loaded'}
    case 'IMAGES_LOADING':
    	return {...state, loading:'loading...'}
    default: 
      return state;
  }
}