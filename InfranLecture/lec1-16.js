// ★ 중복 문자 제거 문제 
/*
    - 문제 1 : 소문자 문자열이 주어질 때 가운데 문자열을 출력하는 코드를 작성하시오.
    - 조건 1 : 첫 줄에는 소문자 문자열이 주어집니다.
    - 조건 2 : 각 문자열은 100자를 넘기지 않습니다.

*/

// version1 : indexOf를 사용한 방법
function solution(s){  
    let answer="";
    for(let i=0; i<s.length; i++){
        if(s.indexOf(s[i])===i) answer+=s[i];
        // indexOf를 사용하여 문자열의 i번째의 인덱스 값이 i의 값과 같을 (같은 자리일 경우) answer에 누적 할당.
        // 만약 첫번째 실행일 경우 k(s[i])의 indexOf는 1이 되므로 1 === 1의 조건에 맞아 answer에 누적 할당되고
        // 그 다음 4번째 실행일 경우 k(s[i])의 indexOf는 1이 되므로 1 === 4의 조건은 맞지 않으므로 다음 for문이 실행된다.
        // t의 경우 k(s[i])의 indexOf는 7이 되므로 i가 7이기 때문에 조건에 맞아 다시 answer에 누적 할당된다. 
    }
    return answer;
}

// version2 : Set 객체를 활용한 방법 | 단 answer에 반환 할때는 문자열 형태로 반환해야 하므로 join을 사용함.

function solution(s){  
    const arr = new Set(s); // => Set 내장 객체를 사용해 중복을 제외한 데이터를 객체 프로퍼티로 받아 arr에 선언
    const answer = [...arr].join(''); // => 다시 answer에 arr 객체의 값들을 배열로 재할당 후 join으로 문자열로 은 후 answer에 할당
    // 여기서 스프레드 연산자의 배열 형태로 join을 실행시킨건 arr은 Set 객체 형태를 띄고 있어 배열 메서드인 join을 실행시킬수 없기 때문에 arr의 값들을 전개하여 배열로 담는 작업이 필요한 거임.
    return answer;
}