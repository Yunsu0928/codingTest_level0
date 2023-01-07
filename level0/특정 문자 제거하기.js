function solution(my_string, letter) {
    return my_string.replaceAll(letter,'');
} // replace는 처음 발견한 문자만 변경, replaceAll은 다 변경