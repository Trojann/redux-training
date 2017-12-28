import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Sum extends Component{
	constructor(props) {
		super(props)
		this.state = {sum:3, a:1, b:2}
	}

	// sum = () => {
	// 	let {sum, a, b} = {...this.state}
	// 	sum = parseInt(a) + parseInt(b)
	// 	this.setState({sum})
	// }

	render() {
		return(
			<div>
				<input 
					value={this.state.a} 
					onChange={(e) => this.setState({a:e.target.value})}
				/> + 
				<input 
					value={this.state.b} 
					onChange={(e) => this.setState({b:e.target.value})}
				/> = 
				<span>{this.state.sum}</span>
				{/* //eslint-disable-next-line*/}
				<button onClick={() => this.setState({sum: parseInt(this.state.a) + parseInt(this.state.b)})}>Sum</button>
				<button onClick={() => this.setState({sum:0, a:'', b:''})}>Clear</button>
				<br />
			</div>
		)
	}
}
