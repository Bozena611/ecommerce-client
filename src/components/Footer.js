import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';

class Footer extends React.Component {

	render() {
		return(
				<div className="footer">
					<div>
						<Link  to={`/contact`}>
						<h2 style={style.link}>Contact us</h2>
						</Link>
					</div>
					<div className="footer_flex">
						<div>
							<p>Copyright &copy; 2019 -  <a style={style.link} href="https://www.linkedin.com/in/bozenavuckovic" rel="noopener noreferrer" target="_blank"> Bozena Vuckovic</a></p>
						</div>
						<div>
							<p>Final Project For - <a style={style.link} href="https://barcelonacodeschool.com/" rel="noopener noreferrer" target="_blank">Barcelona Code School</a></p>
						</div>
					</div>
				</div>
		)
	}
}


export default Footer;

const style={
	link: {
		color: 'white',
		textDecoration: 'underline'
	}
}