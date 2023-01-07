function solution(array) {
    // return array[Math.floor(array.length / 2)]
    return array.sort((a,b) => a-b)[Math.floor(array.length / 2)];
    //오름차순하고 하기
}