// ★ 격자판 최대합 문제 
/*
    - 문제 1 : N*N 격자판이 주어지면 각 행의 합, 열의 합, 두 대각선의 합 중 가장 큰 값을 출력하는 코드를 작성하시오.
    - 조건 1 : 첫 줄에는 N이 주어집니다.
    - 조건 2 : 두번째 줄에는 각 줄에 N개의 자연수가 주어집니다.
    - 조건 3 : 각 자연수는 100을 넘기지 않습니다.
*/

function solution(arr){  
    let answer=Number.MIN_SAFE_INTEGER;
    // 최대값을 저장해야 하므로 작은 값을 answer에 할당합니다. 
    let n=arr.length;
    let rows=cols=0;
    //행열을 각각 0으로 초기화
    for(let i = 0; i<n ; i++){
        rows=cols=0;
        // 2차 for문이 끝날 때마다 새로운 행렬에 대한 합산을 갱신 해주어야 하므로 rows와 cols를 0으로 초기화.
        for(let j = 0 ; j<n ; j++){
            rows += arr[i][j];
            cols += arr[j][i]
            //2중 for문을 사용하여 한 사이클 당 각 행과 열의 누적합을 진행합니다.
        };
        answer = Math.max(answer, rows, cols)
        //2차 for문이 수행 될때마다 max 메서드를 실행하여 answer, rows, cols 중에서 가장 큰 값을 answer에 할당합니다.
    }

    let leftDiag=rightDiag=0;

    for(let i = 0 ;i < n; i++){
        leftDiag += arr[i][i];
        // leftDiag는 0,0 1,1 2,2 이런 식으로 좌표를 넣을 경우 왼쪽 대각선이 가는 효과를 줄 수 있으므로 다음과 같이 작성하고
        rightDiag += arr[i][n-i-1];
        // rightDiag는 오른쪽에서부터 0,4  1,3 2,2 이렇게 좌표를 넣어야 오른쪽 대각선이 가는 효과를 줄 수 있으므로 다음과 같이 작성합니다.
    }
    answer = Math.max(answer, leftDiag, rightDiag);
    // 이전에는 행과 열, answer의 값을 비교해서 가장 큰 값이 answer에 담긴 상태인데 이번에는 그 상태에서 answer값과 leftDiag, rightDiag를 비교하여 가장 큰 값을 answer에 할당하게 됩니다.
    return answer;
    // 즉 rows,cols,leftDiag,RightDiag중 가장 큰 값을 찾아 answer에 할당 후 반환.
}
