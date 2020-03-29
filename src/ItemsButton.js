import React, {Component} from 'react';
import FavoritesMenu from './FavoritesMenu';

class ItemsButton extends Component {
	constructor(props){
		super(props)
		
		this.id = Math.random();

	}

	handleBtnClick = (e)=>{
		e.stopPropagation();
		this.props.toggle(this.props.openId === this.id?'':this.id);
	}

	render(){
		return(
				<button onClick={this.handleBtnClick}
					className={this.props.className 
								?"menu right relative "+this.props.className
								:"menu right relative"}>
					{this.props.name}
					{this.props.openId === this.id 
						&& <FavoritesMenu 
								type={this.props.type}
								list={this.props.list}
								removeAction={this.props.removeAction}
								addToCartAction={this.props.addToCartAction}
								handleOrderClick={this.props.handleOrderClick}/>}
				</button>

			);
	}
};

export default ItemsButton;