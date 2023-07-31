const soluition = (name, yearning, photo) => {
  return photo.map((v) =>
    v.reduce((a, c) => {
      (a += yearning.indexOf(c) ?? 0), 0;
    })
  );
};
