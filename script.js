/* 
  리액트 시작전 간단히 정리하는 자바스크립트 ES6 문법
  (시간이 넉넉치 않으니 구체적인 공부는 하면서하고 일단 기본적인 것만)

  출처 url: https://www.youtube.com/watch?v=NcI-WJSWdv8&list=PLKvVQ9ZQzjVkP0xd30Zi90P4S_rTlm-LH&index=4
*/

// 1. 일반적인 ES5까지의 문법
let name = "me";
let age = 17;

let person = {
  name: name,
  age: age
}

console.log(person);

let person2 = {
  name,//키와 변수명이 같으면 이렇게 shortCut으로써도 됨. person과 같은 값이 나옴
  age
}

console.log(person2);



// 2. Destructuring(객체, 배열 값 뽑아 할당)
let person3 = {
  name2: "me",
  age2: 20
}

// 과거엔
// let name2 = person3.name;
// let age2 = person3['age'];


// 지금은 위 두 문장을 이렇게 가능..(ES6)
let {name2, age2} = person3;

console.log(name2, age2);


let array = [1, 2, 3, 4];
let [a, b] = array;// 순서대로 할당 됨


// ++ rest 문법(자주 쓰이진 않음)
let [y, z, ...rest] = array;// y, z 제외 나머지를 rest에 넣음(배열 형태)

console.log(y, z, ' <-> ', rest);// 1 2  <->  (2) [3, 4]



// 3. spread(...문법 == 닷닷닷 문법 => 객체 복사)
let human = {name: "me", age: 12}

let human2 = {...human}// 복사(...)  <- 이건 내용은 같지만 별개의 객체가 됨

console.log(human2);// 그대로 복사가 됨

let human3 = human;// 이것과 차이점은? <- 이건 주소값을 공유(같은 참조)

console.log(human == human2);// false
console.log(human == human3);// true

let human4 = {...human, address:"Seoul"}// 이렇게 추가도 할 수 있음
console.log(human4);

let human5 = {...human, name:"minji"}// 이렇게 변경도 가능
console.log(human5);

// 배열에도 똑같이 적용됨
let aa = [1, 2];
let bb = [a, 3];
let cc = [...aa, ...bb];

console.log(bb);// [1, 3]
console.log(cc);// [1, 2, 1, 3]



// 4. 삼항연산자(ES6는 아니지만 많이 사용해서)

// 기존에는..
let human6 = {name: "me", age: 17}
//let human6 = null;

if(human6){
  console.log(human6.name);
}else{
  console.log("there is no human6");
}

// ES6에서는..(삼항년산자는 원래 있긴 했지만 많이 쓰여서..)
console.log(human6 ? human6.name : "there is no human6");
