
// <문제>
// 4270 원을 결재하기 위해서 5000을 상대방이 제시했다.
// 우리는 500원, 100원, 50원, 10원 동전을 무한개 소지중이다.
// 최소한의 동전 개수를 이용하여 거스름돈을 돌려주시요 

function giveChange (n) {
    let count = 0;
    let countList = [0, 0, 0, 0];
    const coinList = [500, 100, 50, 10];

    for(let coin of coinList) {
        countList[count] = Math.floor(n/coin) // 작거나 같은 수 반환
        n = n - countList[count] * coinList[count];
        if(n===0) break;
        count++;
    }
    return countList;
}

 let result = giveChange(1200);
 console.log(`500원 : ${result[0]}개, 100원 : ${result[1]}개, 50원 : ${result[2]}개, 10원 : ${result[3]}개`);