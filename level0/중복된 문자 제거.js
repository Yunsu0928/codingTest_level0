function solution(my_string) {  // Set() 중복된 문자를 제거한 값들의 집합 (객체?)
    return [...new Set(my_string)].join('');   //join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열
}