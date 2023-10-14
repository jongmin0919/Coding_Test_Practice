// ★ 등수 구하기 문제 
/*
    - 문제 1 : N명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하시오.
    - 조건 1 : 첫 줄에는 학생수 N이 주어집니다.
    - 조건 2 : 두번째 줄에는 각 학생의 국어점수가 N만큼 주어집니다.
    - 조건 3 : 같은 스코어를 기록한 학생들이 있다면 동등을 기록, 그 다음 등수는 동등된 학생 수만큼 차감되어 다음 스코어를 기록한 학생에게 부여됩니다.

*/

// version1 : Array 내장 객체의 from 메서드를 이용한 방법.
function solution(arr){  
    let n=arr.length;
    let answer=Array.from({length:n}, ()=>1); // => answer 변수에 Array.from을 사용하여 n의 길이만큼 1을 반환한 배열을 생성하여 answer에 할당합니다.
    // 즉 answer는 n의 길이만큼 각 자리마다 1이 담겨진 배열이 할당되게 됩니다.
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(arr[j]>arr[i]) answer[i]++;
            //이중 포문을 사용하여 비교 대상이 되는 arr의 i번째 값보다 arr의 j번째 값이 더 높다면 새로 만든 answer의[i] 번째를 증가시켜줍니다.
            // 즉 기준이 되는 학생의 점수가 비교 되는 학생의 점수보다 작은 상황이라면 해당 학생의 랭크를 증가시키는 방식입니다.
        }
    }             
    return answer;
}


let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));

