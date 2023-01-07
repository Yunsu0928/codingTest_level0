function solution(n, k) {
    return n * 12000 + (k - Math.floor(n/10)) * 2000;  //Math.floor()항상 내림
 }   // 64인분 먹으면 음료수 6개 무료 
     // 10인분 먹으면 음료수 1개 무료