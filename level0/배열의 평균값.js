function solution(numbers) {
    // reduce()  //배열의 요소들을 순회하면서 반복적인 연산을 하는 메서드
    return numbers.reduce((a,b) => a + b, 0) / numbers.length;
    // a의 초기값을 0으로 준다.
    // reduce함수는 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환
}