//요소선택하기
let fors = document.querySelectorAll('.for li');//선택자 모두
//$('')
//for(초기값;조건문;증가식){}

for (let 번호 = 0; 번호< 4; 번호++){ //20일자 피그마 참고
  //실행문
  console.log(번호);
  fors[번호].innerHTML = 번호;
}
//forsof
const forsof=document.querySelectorAll('.forof li');
for(li of forsof){ //for(변수 of 배열){}
  console.log(에라이);
  에라이.innerHTML="과제";
}
//forEach
//foreachs
  foreachs.forEach(function(에라이,번호){
    에라이.innerHTML=번호
  })
