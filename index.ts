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
function solution2(cards1, cards2, goal) {
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

function solution3(n, m, sections) {
  var answer = 0;
  var painted = 0;
  for (var section of sections) {
    if (painted < section) {
      answer++;
      painted = section + m - 1;
    }
  }
  return answer;
}
//
// 코테에서 꼭 answer 값을 정의할 필요는 없다 정도 체크
function solution4(k, score) {
  const stack: number[] = [];
  return score.reduce((a: number[], c: number) => {
    if (stack.length < k) {
      stack.push(c);
      stack.sort((a, b) => a - b);
    } else {
      stack.push(c);
      stack.sort((a, b) => a - b);
      stack.shift();
    }
    a.push(stack[0]);
    return a;
  }, []);
}
