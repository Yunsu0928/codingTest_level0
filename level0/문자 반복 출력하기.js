function solution(my_string, n) {
    // my_string 안의 내용 다 ...
    // map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
    // 왜냐면 hello 입력받을 때, h 3번 e 3번, l 3번 l 3번 o 3번
    // [...my_string].map(s => s?????????(3))
    // 문자열 반복 repeat()
    //return [...my_string].map( s => s.repeat(n)) 오류 >>> 합치기 join
    return [...my_string].map( s => s.repeat(n)).join('');
}