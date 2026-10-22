import { useState, useEffect } from 'react';

function Timer() {
  useEffect(() => {
    console.log('타이머가 시작합니다...');

    const timer = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
    }, 1000);


    // cleanup 함수 : 컴포넌트 언마운트 시 타이머 제거
    // useEffect 에서 함수를 반환하면 cleanup 함수가 된다.
    // 컴포넌트가 언마운트 될때 setInterval로 생성된 타이틀을 먼저 종료한다.
    return () => {
      clearInterval(timer);
      console.log('타이머가 종료됩니다...');
    };
  }, []);

  return <h1>타이머를 시작합니다</h1>;
}

function Example5() {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <div>
      <button onClick={() => setIsTrue(!isTrue)}>타이머 토글</button>
      {isTrue && <Timer />}
    </div>
  );
}

export default Example5;