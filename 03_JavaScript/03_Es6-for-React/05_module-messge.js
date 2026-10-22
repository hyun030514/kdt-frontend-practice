// 외부 모듈 (person.js)에 export한 값 가져다 쓰기

// * named export 한 것을 import 할 때는 {}로 구조분해해서 가져와야한다.
// 다른 이름으로 사용하고자 할 경우 as로 이름을 바꿀 수 있다. 
import { name, age, hobby as h, dream as d }from './04_module-person.js';

export const person = {
    name : name,
    age : age,
    hobby : h,
    dream : d
};

const returnMessage = () => {
    const message = `${name}님 환영합니다!`;
    return message;
};

export default returnMessage; //default는 파일당 한 개만 쓸 수 있움!!

