// ★ 숫자만 추출 문제 
/*
    - 문제 1 : 문자와 숫자가 섞인 문자열 중 숫자만 추출하여 순서대로 자연수를 출력하는 코드를 작성하시오.
    - 조건 1 : 문자의 길이는 50 이하입니다.
    - 조건 2 : 자연수는 100,000,000을 넘기지 않습니다.
*/

// version1 : isNaN 메서드 사용
function solution(str){
    let answer=""; // answer에 빈 문자열을 할당하고
    for(let q of str){
        if(!isNaN(q)) answer+=q; //for문을 돌면서 q가 isNaN(숫자가 아님)의 부정일 때, 즉 숫자일 때 answer에 x를 누적 할당한다.
    }  
    parseInt(answer);
    if(answer > 100000000) return answer = "Over Boundary"; // 조건에 맞도록 answer가 100000000을 넘어가면 "Over Boundary" 할당 후 반환
    else return answer // 범위 안에 있다면 그대로 answer를 반환.
    
}

let str="g0en2T0s8eSoft";
console.log(solution(str));



