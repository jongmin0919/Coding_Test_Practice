// ★ 팰린드롬 문제 
/*
    - 문제 1 : 주어진 문자열이 팰린드롬일 경우 YES, 아닐 경우 NO를 출력하는 코드를 작성하시오.
    - 조건 1 : 첫 줄에 길이 100을 넘지 않는, 공백이 없는 문자열이 주어집니다.
    - 조건 2 : 회문 검사시 문자열의 대소문자 여부를 구분하지 않습니다.
    - 조건 3 : 알파벳 이외의 문자들은 무시합니다.
*/

// version1 : 대소문자 변환 후 비교
function solution(s){
    let answer="YES";
    s=s.toLowerCase().replace(/[^a-z]/g, ''); // s에 소문자로 다운케이스를 한 후 재할당 한 후 replace를 써서 (/a부터 z까지를 제외한 모든 문자/전역으로 검색, 빈 문자열로 대체) 알파벳만 남기고 삭제합니다.
    if(s.split('').reverse().join('')!==s) return "NO"; // lec3-1의 문제 version2 처럼 돌린 문자가 기존 s 문자열과 다르면 NO를 출력
    return answer; // 같은면 그대로 answer(YES) 를 출력합니다.
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));



