// ★ 문자 찾기 문제 
/*
    - 문제 1 : 특정 문자열과 문자를 입력 받은 후 주어진 문자열에서 입력 받은 문자가 몇 개 포함되어있는지를 유추할 수 있는 코드를 작성하시오.
    - 조건 1 : 첫 줄에는 문자열이, 두번째 열에는 문자가 주어집니다.

*/

// version1 : 일반적인 for, if문을 활용하는 법
function solution(s, t){
    let answer=0;
    for(let x of s){
        if(x===t) answer++;
    }
    return answer;
}

// version2 : split을 활용한 방법, 단 문자열 첫번째와 끝에 R이 올 경우 이 코드는 틀린 식이 된다.
function solution(s, t){
    
    let answer=s.split(t).length; // => 주어진 문자열을 t문자를 기준으로 쪼개어 answer에 반환
    if(answer[0])
    return answer-1; // => answer에는 t를 기준으로 쪼개진 문자열이 들어가 있기 때문에 만약 R이 2번 들어가 있다면 
}

// version3 : filter를 활용한 방법
function solution(s, t){
    let count = 0;
    let arr = s.split(''); // => 입력받은 문자열을 split 함수로 각각의 문자로 쪼개어 arr에 배열 형태로 할당
    return count = arr.filter(spell => spell === t).length; // => filter 함수를 사용해 주어진 값 중 t와 같은 값을 반환한 후 걸러진 arr의 길이를 count에 할당
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));



