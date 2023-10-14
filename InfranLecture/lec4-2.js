// ★ 뒤집은 소수 문제 
/*
    - 문제 1 : N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수일 경우 그 값을 출력하는 코드를 작성하시오.
    - 조건 1 : N은 3~100의 범위이며 각 자연수의 크기는 100,000 이하입니다.
*/

// version1 : 소수를 판별하는 함수 생성 후 배열의 함수, 메서드들과 map을 활용한 방법 
function isPrime(num){
    if(num===1) return false; // 1의 경우 완전수 이므로 소수에서 제외.
    for(let i=2; i<=parseInt(Math.sqrt(num)); i++){ // Math.sqrt를 활용하여 소수의 범위를 구합니다.
        if(num%i===0) return false; // 만약 숫자를 i로 나누어 0이면 소수가 아니라 약수이므로 false를 반환합니다.
    }
    return true; // 만약 수가 소수라면 true를 반환합니다.
}

function solution(arr){
    
    arr = arr.map(number => { // 기존의 배열에 각 숫자를 map 함수를 활용해 변환, 반전, 재결합 과정을 거쳐 다시 새로운 배열로서 재할당
        const reverse = parseInt(number.toString().split('').reverse().join(''));
        return reverse;
    })

    let answer=[]; // 정답을 배열로 생성
    for(let x of arr){ // 만약 반전 된 배열의 숫자가 
        if(isPrime(x)) answer.push(x); //isPrime 함수에 의해 참의 값이 전달 된 경우 answer에 x 값을 push
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

