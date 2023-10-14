// ★ 연필개수 구하는 문제 

/*
    - 문제 1 : 주어진 학생 수에 맞춰 필요한 연필의 다스(12에 1세트)를 구하라.
    - 조건 1 : 입력은 100 이하의 자연수이다.
    
*/


// version1 : ceil 메서드를 활용한 풀이 (알고리즘 : O(1))
function solution(n){
    let answer;
    answer=Math.ceil(n/12); // -> answer에 Math 내장 객체의 ceil 메서드를 활용하여 주어진 결과값을 자리올림 한 정수값을 출력한다.
    //1. 만약 학생수가 12명 미만이라면 정수 부분은 0의 자리이므로 ceil로 자리 올림한 1다스를 출력한다.
    //2. 학생수가 13명 부터 시작한다면 12명을 채우고 난 나머지 한 명을 위한 연필이 필요하므로 1다스가 더 필요한 2다스가 된다.

    return answer;
}

console.log(solution(178));

// version2 : if문을 활용한 방법 (Math 내장 객체를 사용하지 않음.)
function solution(n){
    let answer;
    if(n === 0) answer = n;
    // 만약 n이 0이면 연필이 필요 없으므로 answer에 0을 담는다.
    else if(n < 12) answer = 1;
    // 만약 n이 1개 이상 ~ 12개 이하라면 최소한 한 다스(1)는 있어야 하므로 answer에 1을 담는다.
    else if(n%12 === 0) answer = (n/12);
    // 그 외의 12개 이상부터 필요한 상황에서 n을 12로 나눈 나머지 값이 없는 경우, 즉 정확한 다스로 구할 수 있을 경우 그 나눈 값을 answer에 담는다.
    else if(n%12 !== 0) answer = ((n/12) + 1).toFixed(0);
    // 다시 위의 조건에서 n을 12로 나눈 나머지 값이 있는 경우, 즉 정확한 다스로 떨어지지 않을 경우 나눈 값에서 1을 더한 후 toFixed 함수로 나머지를 덜어낸 값을 answer에 담아낸다.
    

    return answer;
}

console.log(solution(178));
