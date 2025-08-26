// تمام 👌 دي مسألة شهيرة جدًا من HackerRank (Cat and Mouse Problem).
// الفكرة كلها إننا نقارن المسافة بين كل قطة والماوس:
// نحسب |x - z| → المسافة بين Cat A والماوس.
// نحسب |y - z| → المسافة بين Cat B والماوس.
// نقارن بينهم:
// لو Cat A أقرب → نطبع "Cat A".
// لو Cat B أقرب → نطبع "Cat B".
// لو المسافتين متساويتين → نطبع "Mouse C".

const CatAndMouse = (x, y, z) => {
  const distanceCatA = Math.abs(x - z);
  const distanceCatB = Math.abs(y - z);

  if (distanceCatA < distanceCatB) return "Cat A";
  if (distanceCatB < distanceCatA) return "Cat B";
  return "Mouse C";
};
console.log(CatAndMouse(1, 2, 3));

class CaatAndMous {
  constructor(X, Y, Z) {
    this.X = X;
    this.Y = Y;
    this.Z = Z;
  }

  getDistance() {
    const distanceCatA = Math.abs(this.X - this.Z);
    const distanceCatB = Math.abs(this.Y - this.Z);

    if (distanceCatA < distanceCatB) return "Cat A";
    if (distanceCatB < distanceCatA) return "Cat B";
    return "Mouse C";
  }
}

const catandMouse = new CaatAndMous(1, 2, 3);
console.log(catandMouse.getDistance());
