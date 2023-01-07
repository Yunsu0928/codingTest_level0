function solution(sides) {
   
    let max = Math.max(...sides);
    // let min = Math.min(...sides);
    let maxIndex = sides.indexOf(max);       //indexOf 처음으로 나타나는 위치의 인덱스 값을 리턴
    let minIndex = maxIndex === 0 ? 1 : 0; // 조건 ? 참 : 거짓
    
    // let long = sides[maxIndex];
    let short = sides[minIndex];
    
    let result = short;
    
    result = result + short - 1
        
    return result;
    
    //if (maxIndex === 0){
     //   minIndex = 1;
   // } else minIndex = 0;  // 배열 인덱스 2개 중에 제일 긴게 0번째 인덱스에 있으면 나머지는 1번째 인덱스
    // 제일 긴 변 : long  제일 짧은 변 : short
    // let long = sides[maxIndex];
    // let short = sides[minIndex];
    
    
}


// 문제가 이런 하아아아앙....;; 작거나 같다가 맞다.
// lonest length < other length1 + other length2
// function solution(sides) {
//     return 2 * Math.min(...sides) - 1;
// }




// 1. 큰 길이가 sides안에 있는 경우[3, 6] x = 6 < 9
// longestSideInSides(6) < otherSide(3) + x
// -> x > 3
// 따라서, (longestSideInSides - otherSide)(3) < x <= longestSideInSides(6) // 이 부분은 slides의 가장 긴 길이와 같아도 된다.
// -> 개수: (longestSideInSides)(6) - (longestSideInSides - shortestSideInSides)(3) = shortestSideInSides = 3


// 2. 다른 길이가 제일 큰 경우
// x < Math.sum(...sides) // 두 변의 길이의 합
// -> x < 9
// -> longestSideInSides(6) < x < 9 
// -> 개수: Math.sum(…sides) - 6(longestSideInSides) - 1  = (longestSideInSides + shortestSideInSides)(9) - (longestSideInSides(6) - 1)


// total = shortestSideInSides + (longestSideInSides + shortestSideInSides)(9) -  (longestSideInSides(6) - 1)
// total = 2 * shortestSideInSides - 1