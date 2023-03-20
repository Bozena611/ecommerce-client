import React, { Component } from 'react';
import axios from 'axios';
import baseURL from "../baseURL";
import { withRouter } from "react-router-dom";

class AddProduct extends Component {

	state = {
		name: '',
		imgURL: '',
		description: '',
		price: '',
		stock: '',
		SKU: '',
	}

	handleChange = e => {
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmit = async e => {
		e.preventDefault();
		const {name, imgURL, description, price, stock, SKU} = this.state;
		try {
			const res = await axios.post(`${baseURL}/products/add`, {
				name: name,
				imgURL: imgURL,
				description: description,
				price: price,
				stock: stock,
				SKU: SKU
			})
			console.log(res);
			this.setState({
				name: '',
				imgURL: '',
				description: '',
				price: '',
				stock: '',
				SKU: ''});
			}
		catch(e){
			console.log(e);
		}
		alert('Product added');
		/*window.location = '/products';*/
		this.props.history.push('/products');
	};

	render () {
		return (
				<div className="add_main_div">
					<div style={{textAlign: "center"}}>
						<h2 style={style.title}>Add New Product</h2>
					</div>
					<form onSubmit={this.handleSubmit} style={{textAlign: "center"}}>
					<ul style={{listStyle: "none"}}>
						<li className="add-product">Name: <input
							className="input"
							placeholder="name"
							name="name"
							value={this.state.name}
							onChange={this.handleChange}
						/></li>
						<li>ImageURL: <input
							className="input-img"
							placeholder="http://i.imgur.com/I86rTVl.jpg"
							name="imgURL"
							value={this.state.imgURL}
							onChange={this.handleChange}
						/></li>
						<li>Description: <textarea
							className="description"
							style={{topMargin: "1em"}}
							placeholder="description"
							name="description"
							value={this.state.description}
							onChange={this.handleChange}
						/></li>
						<li>Price: <input
							className="input"
							placeholder="price"
							name="price"
							value={this.state.price}
							onChange={this.handleChange}
						/></li>
						<li>Stock: <input
							className="input"
							placeholder="stock"
							name="stock"
							value={this.state.stock}
							onChange={this.handleChange}
						/></li>
						<li>SKU: <input
							className="input"
							placeholder="SKU"
							name="SKU"
							value={this.state.SKU}
							onChange={this.handleChange}
						/></li>
					</ul>
					<div style={{textAlign: "center"}}>
						<button className="primary">Add product</button>
					</div>
					</form>
					<br />
				</div>
		);
	}
}


export default withRouter(AddProduct);


const style={
	title: {
  	marginTop: '1em'
  }
}