function solution(money) {
    const answer = [];
    let coffee = parseInt(money / 5500);
    let rest = money - (5500 * coffee);
    
    answer.push(...[coffee, rest])
    //answer[0] = coffee;
    //answer[1] = rest;
    return answer;
}