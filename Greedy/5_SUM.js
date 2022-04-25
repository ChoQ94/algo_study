// [문제]
// 서로 다른 N개의 자연수의 합이 S라고 한다. S를 알 때, 자연수 N의 최댓값은 얼마일까?

function solution(S) {
    let sum =0;
    let num =0;
    let count =0;

    while(1){
        sum = sum + num;
        count++;
        if(sum > S){
            count-- ;
            break;
        }
        num++;
    }
    console.log(count-1);
}


solution(200);