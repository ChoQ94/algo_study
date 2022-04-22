# 그리디 문제

## #1 1_coin.js
    ### 선택절차
        countList[count] = Math.floor(n/coin)
        위 코드를 이용하여 현재의 단위로 최적의 값을 구함
    ### 적정성 검사
        Math.floor(n/coin) 로 위반되지 않음을 확인
    ### 해답 검사
        계산한 값이 부족하다면 다음 종전으로 똑같은 절차를 밟는다.

## #2 2_ATM.js
    오름차순 정렬만 알면 쉽게 가능했던 문제
    list.sort((a,b)=>(a-b)); 오름차순
    list.sort((a,b)=>(b-a)); 내림차순

## #3 3_Treasure.js
    1. B 배열을 변경할수 있다면 오름차순 * 내림차순