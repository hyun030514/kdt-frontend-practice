import { useReducer, useState } from "react";


/* 
reducer : 업무 규칙에 따라 일을 처리해주는 은행 직원
state : 현재 계좌 상태{accountId: 현재 계좌 번호, balance: 현재 계좌 잔액}
action: 고객이 작성한 입금 또는 출금 요청서 { type: "요청 종류", payload: 데이터}
dispatch: 고객이 요청서를 작성한 후 직원을 바루는 기능
*/


function bankReducer(state, action) {
  switch (action.type) {
    case "입금":
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case "출금":
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    default:
      return state;
  }
}

function ATM() {
  // 상태관리 1. 계좌 정보 관리 - 입금, 출금 요청에 따라 잔액 정보를 수정
  const [account, dispatch] = useReducer(bankReducer, {
    account: "123-456-789",
    balance: 10000,
  });

  // 상태관리 2. 사용자가 입력하는 금액값 관리
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h2>현재 계좌 번호 : {account.account}</h2>
      <h2>현재 계좌 잔액 : {account.balance}</h2>

      <input
        type="number"
        placeholder="금액"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <br />

      <button onClick={() => dispatch({ type: "입금", payload: amount })}>
        입금
      </button>
      <button onClick={() => dispatch({ type: "출금", payload: amount })}>
        출금
      </button>
    </>
  );
}

export default ATM;