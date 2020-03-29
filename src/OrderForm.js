import React, { Component } from 'react';

class OrderForm extends Component {

	render(){
		return(
			<div className="order-form" onClick={e=>{e.stopPropagation();}}>
				<div className="order-form-flex">
					<div className="order-form-content">
						<p>Name: </p>
						<input type="text" />
						<div className="flex">
						<div className="flex-half phone">
							<p>Phone: </p>
							<input type="text" />
						</div>
						<div className="flex-half email">
							<p>email: </p>
							<input type="text" />
						</div>
						</div>
						<p>Address: </p>
						<input type="text" />
						<div className="order-form-buttons">
						<button className="menu" onClick={this.props.handleCancelClick}>Cancel</button>
						<button className="menu" onClick={this.props.handleOrderClick}>Order</button>
						</div>
					</div>
				</div>
			</div>
		)
	}

};

export default OrderForm;