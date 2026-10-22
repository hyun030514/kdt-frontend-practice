import { useReducer } from 'react';
import countReducer from '../reducers/countReducer';

function AfterReducer() {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <>
      <h2>카운트 : {count}</h2>
      <button onClick={() => dispatch({ type: 'INCREASE' })}>+1 증가</button>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>-1 감소</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>초기화</button>
      <button onClick={() => dispatch({ type: 'ADD', payload: 5 })}>+5 증가</button>
      <button onClick={() => dispatch({ type: 'ADD', payload: 10 })}>+10 증가</button>
      <button onClick={() => dispatch({ type: 'MINUS', payload: 10 })}>-10 감소</button>
    </>
  );
}

export default AfterReducer;