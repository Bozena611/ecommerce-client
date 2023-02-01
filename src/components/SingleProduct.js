import React from 'react';
import {Link} from 'react-router-dom';
import baseURL from "../baseURL";
import axios from 'axios';
import AddToCart from './AddToCart';
import '../index.css';

class SingleProduct extends React.Component {
	state = {
		product: '',
		error: '',
	};

	componentDidMount() {
		this.showProductId()
	}

	async showProductId () {
		try {
			const url = (`${baseURL}/products/product_id/`);
			const response = await axios.get(url + this.props.match.params.id);
			this.setState({ product: response.data });
    } catch (error) {
       		this.setState({error:'Something went wrong'})      
      }
    }

  render() {
    const { product } = this.state;
  	return (
  		<div className='single_page' style={{textAlign: "center", marginBottom: "1.5em", marginTop: "2em"}}>
				<h2 style={style.title}>{product.name}</h2>
				<div>
					<span><Link  to={`/products/update/${product._id}`}><button className="edit_btn">Edit</button></Link>
					</span>
					<span>
						<Link to={`/products/delete/${product._id}`}>
							<button className="edit_btn" style={style.delete}>
								Delete
							</button>
						</Link>
					</span>
				</div>
				<br />
				<div>
					<img style={style.image} src= {product.imgURL} alt='product'/>
				</div>
				<p style={style.description}>{product.description}</p>
				<h4>Price: €{product.price}</h4>
				{product.name ?
				<AddToCart
					product_id ={product._id}
					name={product.name}
					price={product.price}
				/> : null}
				<br />
			</div>
		)
	};
}


export default SingleProduct;

const style={
	link: {
		marginLeft: '1em'
	},
	delete: {
		marginLeft: '1.8em',
		backgroundColor: 'red',
		color: 'white'
	},
	description: {
		marginTop: '2em',
		marginLeft: '10%',
		marginRight: '10%',
		fontSize: '17px'
	},
	title: {
    marginTop: '1.8em',
    marginBottom: '1.5em'
  },
  image: {
  	marginTop: '1em',
  	border: '1px solid #D3D3D3'
  }	
}