import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";
import { clearCart } from "../store/cartSlice";

/*
  4_1. 컴포넌트 - 상태 변경 
    1) 상태 변경을 위해 액션을 디스패치(전달)합니다. 
    2) react-redux의 useDispatch() 훅을 사용합니다. 
    3) 액션 생성자를 import 한 후 액션 생성자 함수를 호출하여 action 객체를 생성합니다.
*/
/*
  4_2. 컴포넌트 - 상태 읽기 
    1) Redux Store의 상태를 읽기 위해서 react-redux의 useSelector() 훅을 사용합니다.
    2) useSelector()를 통해 상태 트리의 데이터를 읽어올 수 있습니다.
    3) 사용법
       const value = useSelector((state) => state.슬라이스명.원하는상태);
*/
function Cart() {
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart,
  );
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
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
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
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
      )}
    </div>
  );
}

export default Cart;
