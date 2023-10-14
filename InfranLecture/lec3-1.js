// ★ 회문 문자열 문제 
/*
    - 문제 1 : 문자열이 주어지면 해당 문자열이 회문 문자열일 경우 'YES'를, 아닐 경우 'NO'를 출력하는 코드를 작성하시오.
    - 조건 1 : 첫 줄에 길이 100을 넘지 않는, 공백이 없는 문자열이 주어집니다.
    - 조건 2 : 회문 검사시 문자열의 대소문자 여부를 구분하지 않습니다.
*/

// version1 : 대소문자 변환 후 비교
function solution(s){
    let answer="YES";
    s=s.toLowerCase(); // => 주어진 문자열을 다시 소문자로 바꾸어 재할당
    let len=s.length;
    for(let i=0; i<Math.floor(len/2); i++){ //범위를 Math.floor(len/2)로 하는 이유는 짝수일 경우 가운데 문자는 비교하지 않고 양측의 값만 비교하면 되기 때문이고 홀수의 경우 짝수 만큼 비교해야 하기 때문에 소수점을 버리는 floor 메서드를 사용함.
        if(s[i]!=s[len-i-1]) return "NO"; //만약 소문자로 변환 된 문자열의 첫번째가 멘 끝 문자랑 같지 않다면 NO를 반환합니다.
    }
    return answer; // for문을 돌때 조건에 부합하지 않는, 즉 주어진 문자열이 회문 문자열일 경우 그대로 answer(YES상태)를 반환합니다.
}

let str="goooG";
console.log(solution(str));

// version2 : 배열 함수를 활용하는 방법
function solution(s){
    let answer="YES";
    s=s.toLowerCase(); //s를 소문자 문자열로 재할당 한 후 
    if(s.split('').reverse().join('')!=s) return "NO"; // 만약 s를 나누고(split) 반전시켜서(reverse) 다시 문자열로 합친(join) 값이 기존의 s와 같지 않을때 NO를 반환
    return answer; // 조건에 맞는 값이 없을 경우, 즉 회문 문자열일 경우 answer을 반환.
}



