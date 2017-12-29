import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/Counter.js';
import Sum from './components/Sum';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Describe extends Component{
	// constructor(props) {
	// 	super(props)
	// 	this.state = {describe:'none'}
	// }

	render() {
		return(
			<div>
				<div style={{color:'red'}}>Describe: {this.props.desc}</div>
			</div>
		)
	}
}

class Example extends Component{
	constructor(props) {
		super(props)
		this.state = {describe:'none'}
	}
	updateDescribe = (describe) => this.setState({describe})
	render() {
		return (
			<div>
				<h1>Practice make it perfect ^^</h1>
				<Describe desc={this.state.describe} />
      	<Counter countDesc={this.updateDescribe} />
				<Sum sumDesc={this.updateDescribe} />
			</div>
    );
	}
}

ReactDOM.render(<Example />, document.getElementById('root'));
registerServiceWorker();


if (module.hot) {
	module.hot.accept()
}