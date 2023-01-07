function solution(numbers) {
    // numbers []
    // numbers 중 2개 곱해서 최댓값 return 
    // numbers = [0, 31, 24, 10, 1, 9]
    // console.log(numbers.sort()); >> 오류 유니코드 따라 정렬해서 
    
    let max = numbers.length
    numbers.sort((a,b) => a-b); // 오름차순
    return numbers[max-2] * numbers[max-1];
}

// 8번재줄
// a,b 두 요소를 전달하고, a-b로 크기를 비교해서 양수인지 음수인지 0인지
// a가 b보다 크면 양수, 같으면 0, a가 b보다 작으면 음수
// a가 작으면 a를 앞으로 보내고, 0을 반환하면 그대로 있고, a가 크면 b를 앞으로 보내고
// 최종적으로 오름차순 모드가 된다.