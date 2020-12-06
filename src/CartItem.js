import React from 'react';
class CartItem extends React.Component{
     render () {
        const {price, title, qty } = this.props.product;
        const{
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
        } = this.props;
        return (
            <div className="cart-item">

                <div className="left-block">
                    <img style={styles.image} alt="something"/>
                </div>
                <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>Rs {price}</div>
                <div style={{color:'#777'}}>Quantity : {qty}</div>
                    <div className="cart-item-actions">
                        <img
                        alt="increase"
                        className="action-icons"
                        src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg"
                        onClick={() => onIncreaseQuantity(product)}
                        />

                        <img
                        alt="decrease"
                        className="action-icons"
                        src="https://www.flaticon.com/premium-icon/icons/svg/2985/2985073.svg"
                        onClick={() => onDecreaseQuantity(product)}
                        />

                        <img
                        alt="delete"
                        className="action-icons"
                        src="https://www.flaticon.com/svg/static/icons/svg/1345/1345823.svg"
                        onClick={() => onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles ={
    image:{
        height:110,
        width: 110,
        borderRadius: 4,
        background:'#ccc'
    }
}

export default CartItem;