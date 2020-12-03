import React from 'react';
class CartItem extends React.Component{
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt="something"/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>Something</div>
                    <div style={{color:'#777'}}>999</div>
                    <div style={{color:'#777'}}>Quantity : 1</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
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