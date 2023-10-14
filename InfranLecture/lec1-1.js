// ★ 세 수 중 최솟값 문제 

/*
    - 문제 1 : 한 줄에 100 이하의 A,B,C 세 수가 주어지면 가장 작은 값을 출력하는 코드를 작성하시오
    - 조건 2 : 입력은 100 이하의 자연수 세자리이다.
    - 조건 3 : 정렬 함수를 사용하지 마시오.
*/

// version1 : if문을 이용한 문제 풀이 (알고리즘 : O(1))

function solution(a, b, c){
    let answer;
    if(a<b) answer=a;
    else answer=b;
    if(c<answer) answer=c; 
    return answer;
}