import ReactDOM from 'react-dom';
import React from 'react';
import Examples from './components/Examples';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store/config'
import {decrease, getSum, getRandomImages} from './redux/actions'


function render() {
	ReactDOM.render(
		<Examples 
			value={store.getState()}
			onDecrement={()=>store.dispatch(decrease())}
			onSum={(a,b)=>store.dispatch(getSum(a,b))}
			onRandomImages={()=>store.dispatch(getRandomImages)}
		/>, 
		document.getElementById('root'));
	registerServiceWorker();
}

render()
store.subscribe(render)
