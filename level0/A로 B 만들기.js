function solution(before, after) {

    // let result = before.split('').reverse().join(''); // 역순
                // split : 문자열 하나씩 배열로 변환
                // reverse : 배열 요소들을 역순으로
                // join : 배열의 요소를 하나로 합침
    let first = before.split('').sort().join('')
    let second = after.split('').sort().join('')
        
    if( first === second ) return 1;
    return 0;

}