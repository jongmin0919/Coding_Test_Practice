// ★ 가장 긴 문자열 문제 
/*
    - 문제 1 : 문자열로 이루어진 배열이 주어질 때 가장 긴 문자열을 출력하는 코드를 작성하시오.
    - 조건 1 : 첫 줄에는 문자열 집합의 배열이 주어집니다.
    - 조건 2 : 각 문자열은 100자를 넘기지 않습니다.

*/

// version1 : 가장 큰 값을 찾는 알고리즘을 활용한 방법
function solution(s){  
    let answer="", max=0;
    for(let x of s){
        if(x.length>max){ // => 만약 주어진 문자열의 길이가 max값보다 큰 경우
            max=x.length; // => max 변수에 x의 길이를 담고
            answer=x; // => 정답은 x로 할당.
        }
    }
    return answer;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));

// version1 : map함수와 max메서드를 활용한 방법
function solution(s){  
    let arr = s.map(str => str.length); // => map 함수를 활용해  arr에 s 배열의 각각의 문자열의 길이를 반환하는 새로운 배열을 할당
    let answer = Math.max(...arr); // => answer에 max 메서드를 활용해 arr 중에서 가장 큰 값을 할당함.
    // let answer = Math.max.apply(null, arr); => 전개 연산자를 사용하지 않고 apply를 사용도 가능함.
    return answer;

}



