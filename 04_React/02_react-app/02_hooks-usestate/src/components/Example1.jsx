import React from 'react';

function Example1() {
  const { useState } = React;

  // 상태변수의 이름, 상태 변수값 변경하는 상태 업데이트 함수
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <h2>입력 상자와 state</h2>
      <input
        type="text"
        placeholder="메시지를 입력하세요"
        value={message}
        onChange={handleInputChange}
      />
      <h5>실시간 입력값 : {message}</h5>
    </>
  );
}

export default Example1;
