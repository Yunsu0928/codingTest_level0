function solution(my_string) {
    let answer ='';
     for(const i of my_string){ // const
                                     // i = 100
         if( i === i.toUpperCase()){
             answer += i.toLowerCase();
         }else answer += i.toUpperCase();
     }
     return answer;
 }