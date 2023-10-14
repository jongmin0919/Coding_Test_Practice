// ★ 1부터 N까지 출력하는 문제 
/*
    - 문제 1 : 7개의 수가 주어지면 그 수중 가장 작은 수를 출력하는 코드를 작성하시오
*/

// version1 : MAX_SAFE_INTEGER 메서드를 활용한 방법
function solution(arr){         
    let answer;
    let min=Number.MAX_SAFE_INTEGER; // -> 무슨 수가 들어올지 모르기 때문에 자바스크립트에서 표현 가능한 가장 큰 정수를 MAX 메서드를 활용해 할당.
    for(let i of arr){ // -> for of 활용 
        if(arr[i]<min) min=arr[i]; // -> 특정 배열값이 min보다 작을 경우 min에 그 배열값을 할당
    }
    answer=min;
    return answer;
}

// version2 : sort를 이용한 방법
function solution(arr){         
    let answer;
    newArr = arr.sort((a,b) => a - b) // => sort함수를 이용해 arr의 배열값들을 오름차순.
    answer=newArr[0]; // => 새로 할당 된 배열의 가장 첫번째 인덱스의 값(작은 값)을 answer에 할당
    return answer;
}

// version3 : min 메서드를 활용
function solution(arr){         
    let answer;
    answer = Math.min(...arr) // => min 메서드를 활용해 arr의 가장 작은 값을 answer에 바로 할당
    // 스프레드 연산자(...)를 사용하는 이유는 배열들의 값 자체를 복사 할당해야 하기 때문.
    return answer;
}