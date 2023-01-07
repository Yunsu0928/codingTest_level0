function solution(sides) {
    // 선분 3개 삼각형 >> 가장 긴변의 길이는 다른 두변의 길이의 합보다 작아야한다
    // a + b > c  a + c > b b + c > a
    // sides  >> [a,b,c] 배열
    // 삼각형 가능하면 1 못하면 2
   // const long = Math.max[...sides]; // 제일 긴 변 정하기
    // 제일 긴 변을 맨 앞으로 주고 비교? 
    // (a,b) => a-b
    sides.sort((a,b) => a-b); // 오름차순
    
    if(sides[2] < sides[0] + sides[1]) return 1;
    else return 2;
     
}