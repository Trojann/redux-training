import React, {Component} from 'react';
// import './index.css';
import Counter from './Counter';
import Sum from './Sum';
import RandomImages from './RandomImages';

export default class Example extends Component{
	// constructor(props) {
	// 	super(props)
	// }

	render() {
		console.log('props: ', this.props)
		return (
			<div>
				<h1>Practice make it perfect ^^</h1>
      	<Counter 
      		count={this.props.value.count}
      		onDecrement={this.props.onDecrement}
      	/>
				<Sum 
					sum={this.props.value.sum}
					onSum={this.props.onSum}
				/>
				<RandomImages 
      		images={this.props.value.images}
					onRandomImages={this.props.onRandomImages}
				/>
			</div>
    );
	}
}