import React, {Component} from 'react';

class Item extends Component {

	render(){

	const item = this.props.item;	
		
		return(
				<div className="item">
					<div className="item-img">
						<div className="item-color" style={{background: item.color}}>
							{item.name}
						</div>
					</div>
					<div className="item-label">
						<div className="item-caption">
							Item {item.name} Price: {item.price}$
						</div>
						<button className="menu add-to-cart"
								onClick={()=>{
								this.props.actionCart(
									{	
										id: item.id,
										name: item.name,
										price: item.price,
										color: item.color
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
										id: item.id,
										name: item.name,
										price: item.price,
										color: item.color
									})}}
						>{'\u2665'}</button>
					</div>
				</div>
			);
	}
}

export default Item;