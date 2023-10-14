// ★ 1부터 N까지 출력하는 문제 
/*
    - 조건 1 : 입력은 20이하의 자연수
*/

// version1 : 기본적인 for문을 이용하는 방법 (정수 하나만 받으므로  for in이나 for of문은 사용할 수 없다.)
function solution(n){
    let answer=0;
    for(let i=1; i<=n; i++){
        answer=answer+i;
    }
    
    return answer;
}

console.log(solution(10));

// version2 : while문을 이용하는 방법, 단 입력은 랜덤한 숫자임을 가정함.
function solution2(n){
    let answer=0;
    i = 0;
    while(true){
        answer += i; 
        i++ // -> i를 증가시켜주고
        if(i == n) break; // -> 만약 i이 주어진 숫자(n)과 같아진다면 while문 종료.
    }
    
    return answer;
}

console.log(solution(10));
