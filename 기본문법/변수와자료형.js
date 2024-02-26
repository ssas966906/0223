//undefined; 변수는 선언했으나 값을 할당하지 않음(콘솔창)
console.log(변수var);
//var 키워드 작성
// var 변수var 변수에 식별자선언
var 변수var;
변수var="재할당";
console.log(변수var);
// console.log(변수let);

//let
//선언+할당=초기화
let 변수let = '변수let';
console.log(변수let);//변수let
변수let="재할당"
console.log(변수let);//재할당
var 변수var = "중복선언가능";
console.log(변수var);
// let 변수let = '중복선언가능';


//const
const 변수const="상수변수";
console.log(변수const);

//자료형
//number 기본문법2.2. 종류
let num1=10; //=같다라고 생각하면 안됌 꼭 넣는다 할당한다라고 읽어야함=할당연산자
let num2=20;
let sum = num1 + num2;
document.write(sum , typeof sum);
console.log(typeof num1);

//string 따음표안에쓴다
num1="10";
num2="20";
let num3 = 50;
sum = num1 + num2 + num3;
document.write('<br>', sum, typeof sum);
//따옴표를 안할수 있는 자료는 식별자,숫자

// 참조형(배열,객체,함수)
//리터럴 literal
const 배열=["짜장면","짬뽕","짬짜면",9]; //여러개를 넣을 수있다 대괄호 중괄호 확인
//배열은 자료를 인텍스번호로 관리
document.write('<hr>' + 배열+배열[2+1]);
console.log(배열);
배열.forEach(function(매변1,매변2){ //=>나function은같다
  document.write('<hr>' + 매변2);
});
//객체는{}이다 값의 구분을 속성으로 함
const 객체={
  아저씨:"👨",
  나이:50,
  동작:function (){
    alert("아빠왔다");
  },
};
console.log(객체);
document.write("<hr><hr>",객체.아저씨, 객체.나이);
객체.동작();
//객체는 값의 구분을 속성으로 함
//배열은 값의 구분을 인덱스번호로 함
