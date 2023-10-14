// ★ 일곱 난쟁이 문제 
/*
    - 문제 1 : 아홉 난쟁이의 키가 주어졌을 떄,백설공주를 도와 일곱 난쟁이를 찾는 코드를 작성하시오.
    - 조건 1 : 입력은 배열로 주어지며, 합이 100에 맞는 배열의 값들을 출력하시오.

*/

// version1 : 일반적인 이중 for문과 reduce, splice를 활용한 방법
function solution(arr){
    let answer=arr;
    let sum=answer.reduce((a, b)=>a+b, 0);
    let flag = 0;
    for(let i=0; i<8; i++){
        for(let j=i+1; j<9; j++){
            if((sum-(answer[i]+answer[j]))==100){
                answer.splice(j, 1);
                answer.splice(i, 1);
                return answer
            }
        }
    }
}

let arr=[22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));