// ★ 중복 단어 제거 문제 
/*
    - 문제 1 : N개의 문자열이 주어질 때 중복을 제거하고 출력하는 코드를 작성하시오.
    - 조건 1 : 첫 줄에는 입력 수 N이 주어집니다.
    - 조건 2 : 두번째 줄부터 문자열이 N번 만큼 입력되어 주어집니다.
    - 조건 3 : 각 문자열은 100자를 넘기지 않습니다.

*/

// version1 : filter와 indexOf를 사용한 방법
function solution(s){  
    let answer;
    answer=s.filter((string, index) => { // => filter를 사용해서 s 배열의 각 요소(문자열)과 인덱스를 받는다.
        return s.indexOf(string)===index; // => 그 후 String의 indexOf(최초 인덱스)가 s의 현재 인덱스와 같을 경우 그 값을 반환하다.
        // 즉 16번째 문제의 indexOf문제와 비슷한 구현 방식을 의미하며 
        // 만약 인덱스가 2일때 good의 indexOf는 0이므로 조건식에 맞지 않아 반환되지 않는다.
    });
    return answer;
}
