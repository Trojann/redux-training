import React, {Component} from 'react';

export default class Counter extends Component{
	// constructor(props) {
	// 	super(props)
	// 	// this.state = {count:0}
	// 	// this.decrease = this.decrease.bind(this)
	// }

	// decrease = () => {
	// 	let {count} = {...this.state}
	// 	count = count - 1
	// 	this.setState({count})
	// }

	render() {
		return(
			<div>
				Clicked: <span>{this.props.count.result}</span> times
				<button onClick={this.props.onDecrement}>Decrease</button>
				<br />
			</div>
		)
	}
}