import React, {Component} from 'react';

class Item extends Component {

	render(){
		
		return(
				<div className="item left">
					<div className="item-img">{this.props.name}</div>
					<div className="item-label">
						<div className="item-caption">
							Item {this.props.name} Price: {this.props.price}$
						</div>
						<button className="menu"
								onClick={()=>{
								this.props.actionCart(
									{	
										id: this.props.id,
										name: this.props.name,
										price: this.props.price
									})	
								}}

								>Add to cart</button>
						<button className={
							this.props.isFavorite
								?"menu heart btn-active"
								:"menu heart"
						}
							onClick={()=>{
								this.props.actionFav(
									{	
										id: this.props.id,
										name: this.props.name,
										price: this.props.price
									})}}
						>{'\u2665'}</button>
					</div>
				</div>
			);
	}
}

export default Item;