// ★ 대문자 찾기 문제 
/*
    - 문제 1 : 문자열을 입력받은 후 대문자가 몇 개 포함이 되어있는지 출력하는 코드를 작성하시오.
    - 조건 1 : 첫 줄에는 문자열이 주어집니다.
    - 조건 2 : 문자열은 100자를 넘기지 않습니다.

*/

// version1 : 일반적인 for, if문을 활용하는 법
function solution(s){         
    let answer=0;
    for(let x of s){
        if(x===x.toUpperCase()) answer++; // => 만약 주어진 문자 x가 x의 대문자 변환과 같을 때 answer를 카운트 증가. 즉 x가 애초에 대문자라면 대문자로 변환 시켜도 같다는 조건이 성립 되고, 소문자라면 대문다 변환 후 같지 않다는 조건이 성립 되기도 함을 의미함.
    }

    return answer;
}

// version2 : 아스키 코드를 활용한 방법
function solution(s){         
    let answer=0;
    for(let x of s){
        let num=x.charCodeAt(); // => 해당 문자를 아스키코드로 변환하여 num에 할당
        if(num>=65 && num<=90) answer++; // => num이 아스키 소문자 아스키 코드값인 65 ~ 90에 포함될 경우, 즉 소문자일 경우 answer를 누적 증가
    }

    return answer;
}

// version3 : 아스키 코드와 filter 조합을 활용한 방법
function solution(s) {
    let arr = s.split('');
    let answer = arr.filter(spell => { // => filter를 사용해 
        // num = spell.charCodeAt();
        // if if(num>=65 && num<=90);
        if (spell === spell.toUpperCase()) { // => version1과 같은 조건일 경우
        
            return spell; // => spell을 반환하여 새로운 배열 집합을 만든다.
        }
    }).length; // => 이때 새로 필터(생성) 된 배열의 길이를 answer에 담아준 후 반환 해준다.
    return answer;
}


