import React, { Component } from 'react';
import { Button } from "semantic-ui-react";
import CartTotal from "./CartTotal";
import baseURL from "../baseURL";
import axios from 'axios';
import { Link } from "react-router-dom";

class Cart extends Component {

		state = {
			products: [],
			cartProducts: [],
			product_id: '',
			user_id: '',
			isLoading: true,
			error: null
		};

	componentDidMount() {
		this.showCartItems();
	}

	async showCartItems() {
		try {
			const user_id = localStorage.getItem('user_id');
			const response = await axios.get(`${baseURL}/cart/${user_id}`);
			this.setState({
				products: response.data.products,
				isLoading: false
			});
		} catch (error) {
			this.setState({error, isLoading: false });
		}
	}

	async removeFromCart (product_id) {
	 	try {
	 	 	const url = `${baseURL}/cart/remove`;
	 	 	const user_id = localStorage.getItem('user_id');

	 	 	const response = await axios.delete(url, {
	 	 		data: {
	 	 			user_id: user_id,
	 	 			product_id:product_id
	 	 		}
	 	 	});
	 	 		console.log('success');

	 	 		this.setState({
						cartProducts: response.data
					});
	 	 		//alert('Product removed, please choose another one or go back to your cart!');
			/*	window.location = '/cart';*/
	 	 		window.location.reload();
	 	} catch (error) {
		    console.log(error);
		  }
	}

  async clearCart () {
    try {
      const url = `${baseURL}/cart/clear`;
      const user_id = localStorage.getItem('user_id');
      const response = await axios.post(url, {
          user_id: user_id
        });
      //alert('Cart cleared, you can choose another product.');
      window.location = '/cart';
			//window.location.reload(); //reloads the page
    } catch (error) {
      	console.log(error);
    	}
  }


	render(){
		const { isLoading, products, quantity} = this.state;

		return (
			<div className="cart_page">
				<div>
					<h1 style={style.title}>Your shopping cart</h1>
					{!isLoading ? (
						products.map(product =>{
						const {quantity} = product.quantity;
						const { _id, name, imgURL, price } = product.product;
							return (
								<div key={_id}>
									<div style={{textAlign: "center"}}>
									<div>
										<span>
											<h2 style={style.name}>
												<Link to={`/product/${_id}`}>
													{name}
												</Link>
											</h2>
											</span>
											<span className="btn_remove">
												<Button className="btnremove"
								          basic
								          icon="remove"
								          onClick={(e) => {this.removeFromCart(_id);}}
								        />
							        </span>
						        </div>
										<img src= {imgURL} alt='product'/>
										<div>
											<h4 style={style.price}>
											{product.quantity} x €{price}
											</h4>
										</div>
										<div className="ui divider">
										</div>
									</div>
								</div>
							);
						})
						) : (
						<p>Loading...</p>
					)}
				</div>
				<CartTotal products={this.state.products}/>
				<div style={{textAlign: "center"}}>
					<h4> OR </h4>
          <button onClick={(e) => {this.clearCart()}} style={style.clear}>Clear cart</button>
        </div>
      </div>
		);
	}
}

export default Cart; 


const style={
	clear: {
    marginLeft: '1em',
    marginBottom: '6em',
    marginTop: '2em',
    backgroundColor: 'lightgrey',
    height: '3em',
    width: '6em'
  },
  title: {
  	textAlign: 'center',
  	marginTop: '1.5em',
  	marginBottom: '1em',
  },
  price: {
  	marginTop: '1em'
  },
  name: {
  	marginTop: '1.5em'
  }
}