import React, { useContext } from 'react'
import "./Cart.css"
import CartItem from './CartItem';
import { CartContext } from '../App';

function Cart() {

    const { items, dispatch } = useContext(CartContext)

    let totalQuantity = 0; // 총수량=> 각 아이템의 수량 합산
    let totalPrice = 0; // 총금액
    for (const item of items) {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
    }

    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }
    return (
        <div className="cart-container">
            <div className="cart-header">
                <h2>장바구니 ({totalQuantity})</h2>
                {items.length > 0 && (
                    <button className="cart-clear-button" onClick={handleClearCart}>
                        전체 삭제
                    </button>
                )}
            </div>
            {items.length === 0 ? (
                <p className="cart-empty">장바구니가 비어있습니다</p>
            ) : (
                <>
                    <div className="cart-items">
                        {
                            items.map((item) => <CartItem key={item.id} item={item} />)
                        }
                    </div>

                    <div className="cart-summary">
                        <div className="cart-total">
                            <span>총 금액:</span>
                            <span className="cart-total-price">
                                {totalPrice.toLocaleString()}원
                            </span>
                        </div>
                        <button className="cart-order-button">주문하기</button>
                    </div>
                </>
            )
            }
        </div>
    )
}

export default Cart
