import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/Counter.js';
import Sum from './components/Sum';
import RandomImages from './components/RandomImages';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Example extends Component{
	// constructor(props) {
	// 	super(props)
	// }

	render() {
		return (
			<div>
				<h1>Practice make it perfect ^^</h1>
      	<Counter />
				<Sum />
				<RandomImages />
			</div>
    );
	}
}

ReactDOM.render(<Example />, document.getElementById('root'));
registerServiceWorker();


if (module.hot) {
	module.hot.accept()
}