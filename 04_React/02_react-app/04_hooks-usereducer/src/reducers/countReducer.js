// 상태 변경 로직을 컴포넌트 외부 함수(reducer)로 관리
function countReducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    case "RESET":
      return 0;
    case "ADD":
      return state + action.payload;
    case "MINUS":
      return state - action.payload;
    default:
      return state;
  }
}

export default countReducer;