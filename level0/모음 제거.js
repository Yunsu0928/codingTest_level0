function solution(my_string) {

    let answer = my_string.replace(/['a','e','i','o','u']/g,'');
    return answer;
}