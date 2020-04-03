import React, { Component } from 'react';

class OrderForm extends Component {
	constructor(props){
		super(props);

		this.name = React.createRef();
		this.phone = React.createRef();
		this.email = React.createRef();
		this.address = React.createRef();
		
		this.state = {
			name: '',
			phone: '',
			email: '',
			address: '',
			submitted: false
		}
	}

	handleSubmit = ()=>{

		this.setState({
			name: this.name.current.value.trim(),
			phone: this.phone.current.value.trim(),
			email: this.email.current.value.trim(),
			address: this.address.current.value.trim(),
			submitted: true
		});

		this.name.current.value.trim() &&
		this.phone.current.value.trim() &&
		this.email.current.value.trim() &&
		this.address.current.value.trim() &&
		this.props.handleOrderClick();

	}

	render(){
		
		return(
			<div className="order-form" onClick={e=>{e.stopPropagation();}}>
				<div className="order-form-flex">
					<div className="order-form-content shadow">
						<p>Name: </p>
						<input 	type="text" ref={this.name} 
								className={!this.state.name && this.state.submitted ? "red-border":""} />
						<div className="flex">
						<div className="flex-half phone">
							<p>Phone: </p>
							<input 	type="text" ref={this.phone} 
									className={!this.state.phone && this.state.submitted ? "red-border":""}/>
						</div>
						<div className="flex-half email">
							<p>email: </p>
							<input 	type="text" ref={this.email} 
									className={!this.state.email && this.state.submitted ? "red-border":""}/>
						</div>
						</div>
						<p>Address: </p>
						<input 	type="text" ref={this.address} 
								className={!this.state.address && this.state.submitted ? "red-border":""} />
						<div className="order-form-buttons">
						<button className="menu" onClick={this.props.handleCancelClick}>Cancel</button>
						<button className="menu" onClick={this.handleSubmit}>Order</button>
						</div>
					</div>
				</div>
			</div>
		)
	}

};

export default OrderForm;