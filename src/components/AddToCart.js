import React, { Component } from 'react';
import baseURL from "../baseURL";
import axios from 'axios';

class AddToCart extends Component {

	state = {
		user_id: localStorage.getItem('user_id'),
		product_id: this.props.product_id,
		quantity: 1,
	}

	componentDidMount () {

	}

	handleClick = e => {
		let {user_id, product_id, quantity} = this.state;
		this.addToCart(user_id, product_id, quantity);
	}

	async addToCart () {
		let {user_id, product_id, quantity} = this.state;

		try {
			const response = await axios.post(`${baseURL}/cart/add`, {
				user_id:user_id,
				product_id:product_id,
				quantity:quantity
				})
				//if (response.data.ok) return setTimeout(()=> {this.props.history.push('/products')}, 1000);
		}
		catch(e){
			console.log(e);
		}
		//alert('Product added to cart!');
		window.location = '/cart';
		/*this.props.history.push('/cart');*/
	}

	render () {
		return (
			<div style={style.add}>
				<button className="primary" onClick={this.handleClick}>
					Add to cart
				</button>
			</div>
		);
	}
}

export default AddToCart;

const style={
	link: {
		marginLeft: '1em'
	}
}