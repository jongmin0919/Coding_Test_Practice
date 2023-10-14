// ★ 10부제 문제 
/*
    - 문제 1 : 입력된 차량 중 부제에 위반한 차량(차량번호 끝 두자리 수)을 출력하는 코드를 작성하시오.
    - 조건 1 : 첫번쨰 줄에는 시행할 부제가, 두번째 줄에는 날짜가 들어옵니다.

*/

// version1 : 일반적인 for, if문을 활용한 방법
function solution(day, arr){
    let answer=0;
    for(let x of arr){
        if(x%10==day) answer++; // => 자동차 끝 두자리를 10으로 나눈 값이 부제와 일치할 경우 answer을 누적.
    }
    
    return answer;
}

// version2 : filter를 활용한 방법
function solution(day, arr){
    let newArr=arr.filter((number) => {
        return x%10 === day
    })
    let answer = newArr.length
    
    return answer;
}