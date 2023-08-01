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
