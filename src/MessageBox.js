import React, { Component } from 'react';

class MessageBox extends Component {

	render(){
		return(
			<div className="order-form" onClick={e=>{e.stopPropagation();}}>
				<div className="order-form-flex">
					<div className="order-form-content">
						<p className="message-text">{this.props.text}</p>
						<div className="order-form-buttons">
						<button className="menu" onClick={this.props.handleClick}>ok</button>
						</div>
					</div>
				</div>
			</div>
		)
	}

};

export default MessageBox;