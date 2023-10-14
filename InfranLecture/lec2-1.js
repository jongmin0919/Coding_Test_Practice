// ★ 큰 수 출력하기 문제 
/*
    - 문제 1 : 1부터 100까지의 정수 집합을 입력받아 자신의 바로 앞 수보다 큰 수만 출력하는 코드를 작성하시오.
    - 조건 1 : 첫 줄에는 입력 수 N이 주어집니다.
    - 조건 2 : 두번째 줄에는 각 숫자들이 공백을 사이에 두고 N만큼 주어집니다.
    - 조건 3 : 첫 번째 수는 무조건 출력합니다.

*/

// version1 : for문과 push를 활용한 방법
function solution(arr){         
    let answer=[]; //answer을 배열로 선언 및 할당.
    answer.push(arr[0]); // answer에 arr의 첫번째 값(조건3)을 할당.
    for(let i=1; i<arr.length; i++){ // for문을 돌리는 동안
        if(arr[i]>arr[i-1]) answer.push(arr[i]); // 만약 arr[i] 번째 수가 그 전 수보다 클 경우 answer에 그 값을 할당.
    }
    return answer;
}

