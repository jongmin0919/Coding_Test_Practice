// ★ 가운데 문자 출력 문제 
/*
    - 문제 1 : 소문자 문자열이 주어질 때 가운데 문자열을 출력하는 코드를 작성하시오.
    - 조건 1 : 첫 줄에는 소문자 문자열이 주어집니다.
    - 조건 2 : 각 문자열은 100자를 넘기지 않습니다.

*/

// version1 : substring(시작위치, 종료 위치)을 활용한 방법 | 물론 substr(시작 위치, 추출 개수) 사용도 가능.
function solution(s){  
    let answer;
    let mid=Math.floor(s.length/2) // => 주어진 문자열의 길이를 2로 나누어 floor로 소수값을 없앤 후 mid에 그 중앙값을 할당.
    if(s.length%2===1) answer=s.substring(mid, mid+1); // => 만약 주어진 문자열이 홀수라면 answer에 중앙값에서 1칸 이동한 범위의 문자열을 반환.
    else answer=s.substring(mid-1, mid+1); // => 짝수라면 중앙값에서 -1 (인덱스는 0부터 시작하기 때문)부터 +1한 값까지를 범위의 문자열을 반환.
    //if(s.length%2===1) answer=s.substr(mid, 1);
    //else answer=s.substr(mid-1, 2);
    return answer;
}