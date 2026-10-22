/**
  * Array 관련 메소드 

1. Array.prototype.indexOf(element[, fromIndex])
    → 배열에 해당 요소가 위치해있는 첫번째 인덱스 반환 
    → 요소를 찾지 못하면 -1 반환 
    → 옵션 fromIndex : 탐색의 시작 index, 기본값은 0

2. Array.prototype.lastIndexOf(element[, fromIndex])
    → 배열에 해당 요소가 위치해있는 마지막번째 인덱스 반환 
    → 요소를 찾지 못하면 -1 반환 
    → 옵션 fromIndex : 탐색의 시작 index, 기본값은 0

3. Array.prototype.includes(element[, fromIndex])
    → 배열에 해당 요소가 존재하면 true, 존재하지 않으면 false 반환 
    → 옵션 fromIndex : 탐색의 시작 index, 기본값은 0

4. Array.prototype.push(element1[, element2[, ...]])
    → 배열의 끝에 하나 이상의 요소를 추가하고 배열의 새로운 길이를 반환

5. Array.prototype.pop()
    → 배열의 마지막 요소를 제거하고 그 요소를 반환
    → 배열이 비어 있으면 undefined 반환

6. Array.prototype.unshift(element1[, element2[, ...]])
    → 배열의 앞에 하나 이상의 요소를 추가하고 배열의 새로운 길이를 반환

7. Array.prototype.shift()
    → 배열의 첫번째 요소를 제거하고 그 요소를 반환
    → 배열이 비어 있으면 undefined 반환

8. Array.prototype.concat(items1[, items2[, ...]])
    → 배열의 요소들을 하나로 합친 새로운 배열 반환 

9. Array.prototype.slice(start, end)
    → 배열의 start 인덱스 이상 end 인덱스 미만 범위의 요소들을 새로운 배열로 복사해서 반환 

10. Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]])
    → 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경함
    → start : 배열의 변경을 시작할 인덱스
    → 옵션 deleteCount : 배열에서 제거할 요소의 개수
    1) 생략하면 start 부터 모든 요소를 제거
    2) 0 이하이면 아무 요소도 제거하지 않음
    → 옵션 item1, item2, ... : 배열에 추가할 요소들

11. Array.prototype.join([separator])
    → 배열의 각 요소를 separator 로 연결한 하나의 문자열을 반환
    → separator 생략 시 콤마(,)로 연결   

12. Array.prototype.reverse()
    → 배열 내의 요소들을 역순으로 변경하여 반환 
*/

const foodList = ['물회', '삼계탕', '냉면', '수박', '물회'];

console.log(foodList.indexOf('물회'));
console.log(foodList.indexOf('물회', 1));
console.log(foodList.indexOf('삼겹살'));

console.log(foodList.lastIndexOf('물회'));
console.log(foodList.lastIndexOf('물회', 1)); //1부터 거꾸로 탐색
console.log(foodList.lastIndexOf('삼겹살'));

console.log(foodList.includes('물회'));
console.log(foodList.includes('삼겹살'));

const chineseFood = ['짜장면', '탕수육', '짬뽕'];
console.log(chineseFood);

chineseFood.push('우동');
chineseFood.push('양장피');

console.log(chineseFood);

chineseFood.pop();
chineseFood.pop();  //뒤에있는거부터 나옴

console.log(chineseFood);

const chickenList = ['양념치킨', '후라이드', '파닭'];
chickenList.unshift('간장치킨');
chickenList.unshift('마늘치킨'); //기존 배열의 앞쪽에 추가됨

console.log(chickenList)
chickenList.shift();
chickenList.shift();
chickenList.shift();
console.log(chickenList); //기존 배열의 앞쪽부터 지워짐

const color1 = ['레드', '오렌지'];
const color2 = ['옐로우', '그린'];
const color3 = ['블루', '스카이블루'];

const mix = color1.concat(color2); //conlor1에 color2 결합
console.log(mix);

const mix2 = color3.concat(color1, color2); //두 개 이상도 결합 가능!
console.log(mix2);

const front = ['HTML', 'CSS', 'JAVASCRIPT','REACT'];

// slice(시작인덱스, 종료인덱스)
console.log(front.slice(1,3)); // 첫번재 인덱스부터 세번째 인덱스 이전까지 자르겟다
console.log(front);  // 원본 배열에 영향을 주지 X

//splice(시작인덱스, 제거할개수, 추가값...)
console.log(front.splice(3, 1, "Vue"));  //react 제거
console.log(front);  //원본 배열에 영향을 준다

const snakList = ['사탕', '초콜릿', '껌', '과자'];
console.log(snakList);
console.log(snakList.join());
console.log(snakList.join('/'))

console.log([1, 2, 3, 4, 5].reverse());