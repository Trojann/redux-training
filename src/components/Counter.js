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
		const {count:{result}, onDecrement} = this.props
		return(
			<div>
				Clicked: <span>{result}</span> times
				<button onClick={onDecrement}>Decrease</button>
				<br />
			</div>
		)
	}
}