// 객체로 생각하기
const soluition = (name, yearning, photo) => {
  return photo.map((v) =>
    v.reduce((a, c) => {
      (a += yearning.indexOf(c) ?? 0), 0;
    })
  );
};

// 분해해서 string 배열화
// v = 'qwe'
// [v] = ['qwe']
// [...v] = ['q','w','e'];

// 두 배열에 첫번째 값이 있는 지 확인
// 숫자를 늘릴 필요 없이 배열을 shift()로 지워버리기.
function solution(cards1, cards2, goal) {
  for (const s of goal) {
    if (cards1[0] == s) {
      cards1.shift();
    } else if (cards2[0] == s) {
      cards2.shift();
    } else {
      return 'No';
    }
  }

  return 'Yes';
}
