// ★ 자리수의 합 문제 
/*
    - 문제 1 : N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고 그 합이 최대인 자연수를 출력하는 코드를 작성하시오.
    - 조건 1 : 각 자연수의 자릿값의 핪이 같은 경우 본래의 숫자가 큰 숫자를 출력하시오.
    - 조건 2 : N은 3~100의 범위이며 각 자연수의 크기는 10,000,000 이하입니다.
*/

// version1 : 자릿수 구하기(mod) 와 자릿수 내리기 floor(n/10) 알고리즘 활용
function solution(n, arr){
    let answer, max=Number.MIN_SAFE_INTEGER;
    for(let x of arr){
        let sum=0, tmp=x;
        while(tmp){ // tmp가 0(거짓)이 될때까지 반복
            sum+=(tmp%10); // sum의 각각의 자릿수를 누적 합산합니다. 이때 나머지 연산으로 각 자릿수의 값을 구합니다.
            tmp=Math.floor(tmp/10); // 다음 tmp를 10으로 나눈 후 floor로 소수점을 없애 원래 tmp의 자릿수를 낮추는 결과로 tmp에 재할당 합니다.
        }
        if(sum>max){ // 위의 while문이 끝난 후 배열의 자릿값의 합이 max보다 클 때 
            max=sum; // max에 그 합을 할당하고
            answer=x; // 배열의 값을 answer에 할당합니다.
        }
        else if(sum===max){ // 만약 이전의 max값과 현재 자릿수 합산 값이 같은 경우
            if(x>answer) answer=x; // 이중 if문으로 현재의 배열의 값이 이전 x(이전 배열의 값) 보다 큰 경우 현재의 배열값을 answer에 할당합니다.
        }
    }
    return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
