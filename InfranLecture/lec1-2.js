// ★ 삼각형 판별하기 문제 

/*
    - 문제 1 : 길이가 서로 다른 A,B,C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있을 경우 YES, 아닐 경우 NO를 출력하는 코드를 작성하라.
    - 조건 1 : 입력은 100 이하의 자연수 세자리이다.
    
*/

// version1 : if문을 이용한 문제 풀이 (알고리즘 : O(1))
function solution(a, b, c){
    let answer="YES", max;
    let tot=a+b+c;
    if(a>b) max=a;
    else max=b;
    if(c>max) max=c;
    if(tot-max<=max) answer="NO"; 
    return answer;
}
