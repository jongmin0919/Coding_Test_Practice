// ★ 대소문자로 변환 문제 
/*
    - 문제 1 : 대문자와 소문자가 같이 존재하는 문자열을 입력 받았을때 각각 반대로 출력하라.
    - 조건 1 : 첫 줄에는 문자열이 주어집니다.
    - 조건 2 : 문자열은 100자를 넘기지 않습니다.

*/

// version1 : to함수를 이용한 방법
function solution(s){  
    let answer="";
    for(let x of s){
        if(x===x.toUpperCase()) answer+=x.toLowerCase();
        // 만약 기존 문자가 대문자와 같다면 소문자로 변환 후 answer에 누적 할당.
        else answer+=x.toUpperCase(); // 그 반대의 경우, 즉 소문자일 경우 대문자로 변환 후 answer에 누적 할당.
    }
    return answer;
}

console.log(solution("StuDY"));


