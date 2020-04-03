import React, {Component} from 'react';

class FavoritesMenu extends Component {

	render(){

		const totalPrice = this.props.list.length > 0 
			? this.props.list.map(item=>item.price).reduce((sum,price)=>sum+price)
			: 0;

		const items = this.props.list &&
						this.props.list.map(item=>{
						return(
							<div key={item.id} className="sel-items left">
								<div className="sel-item-img" style={{background: item.color}}>
									<div className="sel-item-title">
										{item.name}
									</div>
									<div className="item-price-label">{item.price}$</div>
									<div className="rem-button"
										onClick={(e)=>{e.stopPropagation();this.props.removeAction(item)}}>
										Remove
									</div>
									{this.props.addToCartAction && 
										<div className="rem-button"
										onClick={(e)=>{e.stopPropagation();
											this.props.addToCartAction(item)}}>
										Add to cart
									</div>}
								</div>
							</div>
						)
					});

		const cart = 	<div className="fav-menu clearfix shadow">
							<div className="flex-col">
								<div className="fav-menu-items">
									{items}
								</div>
								<div className="fav-menu-total">
									{totalPrice > 0 && 
										<div className="flex-total">
												{`Total price: ${totalPrice}$`}
												<div 
													className="menu order-btn" 
													onClick={this.props.handleOrderClick}>Order</div> 
										</div>}
								</div>
							</div>
						</div>;


		return(
				<div>
				{this.props.type==="cart"
					?	cart
					:	<div className="fav-menu clearfix shadow">{items}</div>}
				</div>
			);
	}
}

export default FavoritesMenu;