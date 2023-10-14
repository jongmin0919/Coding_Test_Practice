// ★ 대문자로 통일 문제 
/*
    - 문제 1 : 대문자와 소문자가 같이 존재하는 문자열을 입력 받았을때 대문자로 모두 통일하여 출력하는 코드를 작성하시오.
    - 조건 1 : 첫 줄에는 문자열이 주어집니다.
    - 조건 2 : 문자열은 100자를 넘기지 않습니다.

*/

// version1 : charCodeAt 함수와 fromCharCode 메서드를 이용한 방법 활용하는 법
function solution(s){         
    let answer="";
    for(let x of s){
        let num=x.charCodeAt(); // => charCodeAt으로 해당 문자를 아스키 코드로 변환하여 num에 할당
        if(num>=97 && num<=122) answer+=String.fromCharCode(num-32);
        // 만약 num이 아스키 코드값의 97 ~ 122, 즉 소문자의 범위에 해당할 경우 answer에 String 내장 객체의 fromcharCode 메서드를 사용해 (num-32) 즉 소문자 코드 범위를 변환하도록 함.
        else answer+=x; // 소문자의 범주에 해당하지 않으면 그 값을 그대로 answer에 누적 합.

        //if(x===x.toLowerCase()) answer+=x.toUpperCase();
        //else answer+=x;
    }

    return answer;

}


