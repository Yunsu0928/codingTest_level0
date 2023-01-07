function solution(n) {   // n은 팩토리얼 결과값
    let result = 1;   // 0이면 다 0되니까 1
    
    for(let i = 1; i <= n; i ++){  // n이 10!이니까
        result *= i;            // result값을 n과 비슷하게 만들기
                                // result랑 n 비교
       /* if( result === n){      // result랑 n같으면, 마지막 i가 제일 큰 수
            return i;
        }*/
        if( result > n ){ // result가 크면 -1 해주면 i-1이 제일 큰수
            return i-1;
        }
    }
}
   
  /*  let result = 1;
    let array = [];
  
   for (let i = 1; i <= 10; i++) {  // 재귀 함수
        if( n > i){
        }
       array[i] = result * i;
   }
    return Math.max(array); */

