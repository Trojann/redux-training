import React, {Component} from 'react';

export default class Sum extends Component{
	constructor(props) {
		super(props)
		this.state = {sum:3, a:1, b:2}
	}
	sum = () => {
		let {sum, a, b} = {...this.state}
		// eslint-disable-next-line
		sum = parseInt(a) + parseInt(b)
		this.setState({sum})
		this.props.sumDesc('Click "sum" button')
	}

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
				<button onClick={this.sum}>Sum</button>
				<button onClick={() => this.setState({sum:0, a:'', b:''})}>Clear</button>
				<br />
			</div>
		)
	}
}
