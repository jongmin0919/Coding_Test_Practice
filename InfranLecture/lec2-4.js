// ★ 점수 계산 문제 
/*
    - 문제 1 : 10개의 OX문제에 대한 성적 중 맞은 경우는 1, 틀린 경우는 0, 연속으로 맞출 경우 가산점이 1씩 부여되어 총합의 점수를 구하는 코드를 작성하시오.
    - 조건 1 : 첫 줄에는 답지 N이 주어집니다.
    - 조건 2 : 두번째 줄에는 맞춘 경우(1) 과 틀린 경우(0) 가 공백을 사이에 두고 N 만큼 입력됩니다.
    - 조건 3 : 연속으로 맞춘 경우 가산점을 1씩 부여합니다. 

*/

// version1 : for문을 이용한 방법
function solution(arr){         
    let answer=0, cnt=0; //answer와 cnt를 0으로 초기화 한 후
    for(let x of arr){
        if(x===1){ // 만약 맞춘 경우에는
            cnt++; // cnt를 누적 증가시킨 후 
            answer+=cnt; // answer에 cnt를 누적 합계시켜줍니다.
        }
        else cnt=0; // x가 1 이외, 즉 0일 경우 cnt(연속으로 맞춘 상태)를 0으로 다시 초기화 합니다.
    }
       
    return answer;
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));

