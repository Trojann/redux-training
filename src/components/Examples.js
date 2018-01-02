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
		const {value:{count,sum, images}, onDecrement, onSum, onRandomImages} = this.props
		return (
			<div>
				<h1>Practice make it perfect ^^</h1>
      	<Counter 
      		count={count}
      		onDecrement={onDecrement}
      	/>
				<Sum 
					sum={sum}
					onSum={onSum}
				/>
				<RandomImages 
      		images={images}
					onRandomImages={onRandomImages}
				/>
			</div>
    );
	}
}