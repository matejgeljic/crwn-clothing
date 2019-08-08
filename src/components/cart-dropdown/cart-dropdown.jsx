import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                ))}
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);