// Hackerrank (Electronics Shop Problem)

// نحسب كل الاحتمالات:
// 40 + 8 = 48 ✅
// 40 + 12 = 52 ✅
// 50 + 8 = 58 ✅
// 50 + 12 = 62 ❌ (أكبر من الميزانية)
// 60 + 8 = 68 ❌
// 60 + 12 = 72 ❌

// إذن:
// القيم الممكنة = [48, 52, 58]
// أكبر قيمة ≤ 60 هي 58 → دي الإجابة.

function getMoneySpent(keyboards, drives, b) {
  let ArrayPrices = [];
  for (let keyboard of keyboards) {
    for (let drive of drives) {
      let total = keyboard + drive;
      ArrayPrices.push(total);
    }
  }
  ArrayPrices = ArrayPrices.filter((price) => price <= b);
  return ArrayPrices.length ? Math.max(...ArrayPrices) : -1;
}

// أمثلة:
console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60)); // 58

// 🔹 الحل بـ Clean Code
function getMoneySpent(keyboards, drives, budget) {
  const combinations = getCombinations(keyboards, drives);
  const affordable = combinations.filter((price) => price <= budget);
  return affordable.length ? Math.max(...affordable) : -1;
}

function getCombinations(arr1, arr2) {
  return arr1.flatMap((k) => arr2.map((d) => k + d));
}

// مثال
console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60)); // 👉 58

// 🔹 الحل بطريقة OOP
class ElectronicsShop {
  constructor(keyboards, drives, budget) {
    this.keyboards = keyboards;
    this.drives = drives;
    this.budget = budget;
  }

  getCombinations() {
    return this.keyboards.flatMap((k) => this.drives.map((d) => k + d));
  }

  getMaxAffordable() {
    const affordable = this.getCombinations().filter((p) => p <= this.budget);
    return affordable.length ? Math.max(...affordable) : -1;
  }
}

// مثال
const shop = new ElectronicsShop([40, 50, 60], [5, 8, 12], 60);
console.log(shop.getMaxAffordable()); // 👉 58
