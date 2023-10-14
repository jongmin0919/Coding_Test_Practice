// ★ 가위 바위 보 문제 
/*
    - 문제 1 : A와 B 두 사람이 N번의 게임을 할 때 A가 이기면 A, B가 이기면 B를, 비길 경우 D를 출력하는 코드를 작성하시오.
    - 조건 1 : 첫 줄에는 게임 횟수인 N이 주어집니다.
    - 조건 2 : 두번째 줄에는 A의 가위 바위 보 정보가 N만큼 주어지고, B의 경우도 마찬가지입니다.
    - 조건 3 : 1은 가위, 2는 바위, 3은 보로 간주됩니다.

*/

// version1 : for문을 이용한 방법
function solution(a, b){         
    let answer=""; 
    for(let i=0; i<a.length; i++){
        if(a[i]===b[i]) answer+="D "; // => 만약 같은 손을 낸 상황이면 answer에 D를 누적 할당합니다.
        // 아래의 else if부터 a가 b를 이긴 상황, 즉 a가 가위(1)를 내었을 때 b가 보(3)인 상황에서 이길 경우 등
        // a가 이기는 상황이라면 answer에 A를 누적 할당 시켜줍니다.
        else if(a[i]===1 && b[i]===3 || a[i]===2 && b[i]===1 || a[i]===3 && b[i]===2) answer+="A "; 
        else answer+="B "; // => 앞의 조건식들과 부합하지 않은, 즉 else if의 조건식들과 반대의 경우(b가 a를 이기는 상황) answer에 B를 누적 할당 시킵니다.
    }
    
    return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));

