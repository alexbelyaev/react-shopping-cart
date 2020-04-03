import React, {Component} from 'react';
import ItemsButton from './ItemsButton';
import Item from './Item.js';
import OnClickOutside from './OnClickOutside.js';
import OrderForm from './OrderForm';
import MessageBox from './MessageBox';

class App extends Component {
  constructor(props){
    super(props)

      this.items = [];
      for(let i=1;i<=100;i++){
        this.items.push({
          name: i,
          color: this.getRandomColor(),
          price: Math.ceil(Math.random()*100),
          id: Math.random()*Math.pow(10,17),
          categoryId: Math.ceil(Math.random()*15)
        });
      }

      this.state = {
        openMenuId: '',
        favorites: [],
        cart: [],
        displayItems: JSON.parse(JSON.stringify(this.items))
      }
  }

  handleToggle = (id)=>{
    this.setState({openMenuId: id?id:''})
  }

  getRandomColor = ()=>{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  handleCatClick = (id) => {
    this.setState({
      displayItems: id
        ? JSON.parse(JSON.stringify(this.items.filter(item=>item.categoryId===id)))
        : JSON.parse(JSON.stringify(this.items))
    })
  }

  handleFavClick = (item)=>{

      const i = Object.assign({}, item);
      const index = this.state.favorites.map(
                      (el)=>el.id).findIndex((el)=>el===i.id);

      index === -1 
        ? this.setState({favorites: [...this.state.favorites, item]})
        : this.setState({favorites: this.state.favorites.filter(
            (el)=>el.id !== item.id)});
  }

  handleAddToCartClick = (item)=>{ 
      const cartId = Math.random()*Math.pow(10,17);
      let i = Object.assign({}, item);
      i.id = cartId;
      this.setState({cart: [...this.state.cart, i]})
  }

  handleOrderClick = (e)=>{
    e.stopPropagation();
    this.setState({openMenuId: 'OrderForm'});
  }

  handleMessageClick = (e)=>{
    this.setState({openMenuId: ''});
  }

  handleFormOrderClick = (e)=>{
    this.setState({openMenuId: 'MessageBox', cart: []});
  }

  handleFormCancelClick = (e)=>{
    this.setState({openMenuId: ''});
  } 

  handleRemoveFromCart = (item)=>{

      const index = this.state.cart.map(
                      (el)=>el.id).findIndex((el)=>el===item.id);

      index !== -1 
        && this.setState({cart: this.state.cart.filter(
            (el)=>el.id !== item.id)});

  }

  render(){
    return (
    <div className="app">
      <div className="top-bar clearfix">
          <h1 className="title left">Shopping Cart</h1>
          <OnClickOutside action={this.handleToggle}>
          <ItemsButton  name={this.state.cart.length>0
                              ?"Cart "+this.state.cart.length
                              :"Cart"} 
                        className={this.state.cart.length>0
                                  ?"btn-active"
                                  :""} 
            type="cart"
            openId={this.state.openMenuId}
            toggle={this.handleToggle}
            list={this.state.cart}
            removeAction={this.handleRemoveFromCart}
            handleOrderClick={this.handleOrderClick}/>
          <ItemsButton name="Favorites" 
            openId={this.state.openMenuId}
            toggle={this.handleToggle}
            list={this.state.favorites}
            removeAction={this.handleFavClick}
            addToCartAction={this.handleAddToCartClick}/>
          {this.state.openMenuId === 'OrderForm' && 
              <OrderForm   handleOrderClick={this.handleFormOrderClick}
                           handleCancelClick={this.handleFormCancelClick}/>}
          {this.state.openMenuId === 'MessageBox' &&
              <MessageBox text='Thank you for order!' handleClick={this.handleMessageClick} />}
          </OnClickOutside>
      </div>
      <div className="flex">
      <div className="sidebar">
        <ul className="categories">
            <li onClick={()=>{this.handleCatClick()}}>All Items</li>
         {[...new Set(this.items.map(item=>item.categoryId))]
            .sort((a,b)=>a-b)
            .map(catId=>{
          return(
            <li key={catId} onClick={()=>{this.handleCatClick(catId)}}>
              {`Category ${catId}`}
              <span className="count">[{this.items.filter(item=>item.categoryId===catId).length}]</span>
            </li>)
          })}
        </ul>
      </div>
      <div className="content">
        {this.state.displayItems.map(item=>{return (
            <Item key={item.id}
                  item={item}
                  actionCart={this.handleAddToCartClick} 
                  actionFav={this.handleFavClick} 
                  isFavorite={!!this.state.favorites
                                .map(el=>el.id)
                                .find(el=>el===item.id)}/>
          )}

        )}
      </div>
      </div>
    </div>
  );
  }
}

export default App;
