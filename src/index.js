import ReactDOM from 'react-dom';
import React from 'react';
import Examples from './components/Examples';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store/config'


function render() {
	ReactDOM.render(<Examples />, document.getElementById('root'));
	registerServiceWorker();
}

render()
store.subscribe(render)
