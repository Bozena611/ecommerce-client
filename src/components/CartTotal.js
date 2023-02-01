import React from 'react';
import {Link} from 'react-router-dom';
import calculateCartTotal from "../Helpers/calculateCartTotal";

function CartTotal ({ products }) {
  const [cartAmount, setCartAmount] = React.useState(0);
  const [isCartEmpty, setCartEmpty] = React.useState(false);

  React.useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products);
    //console.log("cartTotal", cartTotal)
    //console.log("stripeTotal", stripeTotal)
    setCartAmount(cartTotal);
    localStorage.setItem('amount', cartTotal);
    setCartEmpty(products.length === 0);
  }, [products]);

	return (
		<div style={{textAlign: "center"}}>
			<h3 style={style.total}>Total: €{cartAmount}</h3>
	    <div className="example">
        <span>
        <Link  to={`/payment`}><button style={style.pay}>Pay</button></Link>
        </span>
      </div>
    </div>
  );
}


export default CartTotal;

const style={
  pay: {
    marginLeft: '1em',
    marginBottom: '3em',
    marginTop: '2em',
    height: '3em',
    width: '6em'
  },
  total: {
    marginTop: '2em',
    color: 'red'
  }
}