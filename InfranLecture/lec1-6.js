// ★ 1부터 N까지 출력하는 문제 
/*
    - 문제 1 : 7개의 수가 주어지면 그 수중 홀수인 자연수들만 골라 합을 구하고 그중 최솟값을 구하는 코드를 작성하시오.

*/

// version1 : 일반적인 for, if문을 활용한 방법
 function solution(arr){
                let answer=[];
                let sum=0, min=1000;
                for(let x of arr){
                    if(x%2===1){
                        sum+=x;
                        if(x<min) min=x;
                    }
                }
                answer.push(sum);
                answer.push(min);     
                return answer;
            }

// version2 : filter와 reduce함수, min메서드를 활용한 방법
 function solution(arr){
                
                let newArr = arr.filter((number) => {
                    return number % 2 !== 0; // 조건에 맞는 값만 필터링하여 newArr에 반환
                  });
                let add = newArr.reduce((acc, val) => {
                    return acc + val; // reduce 함수로 (누적값, 인자값) 을 선언 후 배열을 돌면서 누적값에 인자값을 더한 값을 차례대로 리턴
                }, 0) // 초기값은 0
                let min = Math.min(...newArr); // min 메서드를 활용해 newArr의 최솟값을 min 변수에 할당
                let answer = [add, min];
                return answer;
            }