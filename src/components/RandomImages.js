import React, {Component} from 'react';
import $ from 'jquery'
export default class RandomImages extends Component{
	constructor(props) {
		super(props)
		this.state = {data:[],
			loading:'Please click the "Random Images" button'
		}
	}

	randomImages = () => {
		this.setState({loading: 'loading...'})
		const imgurAPI = "https://api.imgur.com/3/gallery/random/random/1"
	  $.getJSON(imgurAPI).done((data) => this.setState({data:data.data, loading:'loaded'}))
	}

	render() {
		return(
			<div>
				<button onClick={this.randomImages}>Random Images</button>
        <br />CountStatus: <span style={{color:"blue"}}>{this.state.loading}</span>
        <p />
        <ImageList images={this.state.data} />
			</div>
		)
	}
}
function ImageList(props) {
	return (
		<div>
			{props.images.map((image) => (
				<img key={image.id} src={image.link} alt={image.title} style={{height:200}} />)
			)}
		</div>
	)
}