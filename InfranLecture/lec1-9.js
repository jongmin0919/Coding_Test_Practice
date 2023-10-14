// ★ A를 #으로 문제 
/*
    - 문제 1 : 대문자로 이루어진 영어단어가 입력되면 영단어중 포함된 'A' 모두를 '#'으로 바꾸어 출력하시오.
    - 조건 1 : 첫번째 공백이 없는 문자열 하나가 주어집니다.

*/

// version1 : 일반적인 for, if문을 활용하는 법
function solution(s){
    let answer="";
    for(let x of s){
        if(x=='A') answer+='#'; // => 만약 주어진 문자열 중 A가 포함 된다면 새 문자열에 #을 누적 합산
        else answer+=x; // => A가 아니라면 그대로의 문자를 새 문자열에 누적 합산
    }
    return answer;
}

// version2 : replace 함수를 이용한 방법
function solution(s){
    let answer=s;
    answer=answer.replace(/A/g, "#"); // => 조건은 정규 표현식을 사용해 문자 A(/A)를 모두(/g) 찾아 '#'으로 대체함을 의미.
    return answer;
}

// version2 : map 활용하는 방법
function solution(s){
    
    const arr = s.split(''); // => 주어진 문자열을 문자 단위로 쪼갠 후 arr 변수에 배열로서 반환
    const modArr = arr.map((spell) =>{ // => map함수 실행
        if(spell === 'A') return '#' // => 주어진 배열의 값이 문자열 A일때 #을 반환 후 다음 배열값 호출
        return spell // => 조건에 맞지 않을 경우 그대로의 문자열 반환 후 다음 배열값 호출
    })
    let answer = modArr.join(''); // => map에 의해 새로 할당 된 modArr 배열을 join함수로 다시 문자열로 묶어 answer에 할당
    return answer;
}

