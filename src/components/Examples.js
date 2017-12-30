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