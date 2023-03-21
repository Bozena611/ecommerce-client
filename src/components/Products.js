import React, { Component } from 'react';
import baseURL from "../baseURL";
import axios from 'axios';
import { Link } from "react-router-dom";

class Productos extends Component {
	state = {
		products: [],
		isLoading: true,
		error: null
	};

	componentDidMount() {
		this.showAllProducts();
	}

	async showAllProducts() {
		try {
			const response = await axios.get(`${baseURL}/products/`);
			this.setState({
				products: response.data.products,
				isLoading: false
			});
		} catch (error) {
			this.setState({error, isLoading: false });
		}
	}
	

	render(){
		const { isLoading, products } = this.state;
		return (
			<React.Fragment>
				<div className="products_page">
					<h1 style={style.title}>Our Projects</h1>
					<div className ="mainContainer">
						{!isLoading ? (
							products.map(product =>{
								const { _id, name, imgURL, description, price } = product;
								return (
									<div key={_id}>
										<Link to={`/product/${product._id}`}>
											<div className="product_div">
											<h3>{name}</h3>
											<img style={style.image} src= {imgURL} alt='product'/>
											<div>
												<h4 style={style.details}>Price: €{price}</h4>
											</div>
											</div>
										</Link>
									</div>
								);
							})
						) : (
							<p>Loading...</p>
						)}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Productos; 

const style={
  details: {
 		marginTop: '0.5em',
 		marginBottom: '1.5em'
 		
 	},
 	title: {
 		textAlign: "center",
 		marginTop: '1em',
    marginBottom: '1.5em'
 	},
 	image: {
 		border: '1px solid #D3D3D3'
 	}
 }