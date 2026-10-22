import { useRef, useState } from 'react';

function Example1() {
  console.log('컴포넌트 렌더링됨');

  const [count, setCount] = useState(0); // [0, f]

  const countRef = useRef(0); // {current : 0}

  const handleCountChange = () => {
    setCount(count + 1);
  };

  const handleCountRefChange = () => {
    countRef.current += 1;
  };
  return (
    <>
      <button onClick={handleCountChange}>state(count) 값 변경</button>
      <button onClick={handleCountRefChange}>ref(countRef) 값 변경</button>
      <h1>
        state(count) 값: {count}, ref(countRef) : {countRef.current}
      </h1>
    </>
  );
}

export default Example1;
