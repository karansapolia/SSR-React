import React, {Component} from 'react';

class SpeakerCard extends Component {
	render() {
		return (
			<div>
				<img className='card-img-top' src={'/static/speakers/Speaker-${this.}'}>
				<div className='card-body'>
					<h4 className='card-title'>{this.props.speaker.userFirstName}</h4>
					<p className='card-next'>{this.props.speaker.bioShort}</p>
				</div>
			</div>
		);
	}
}

export default SpeakerCard;