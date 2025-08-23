// Birthday Cake Candles.js
// 📌 نص المسألة
// عندك مصفوفة candles فيها أطوال الشمع.
// الطفل يقدر يطفي أطول شمعة بس.
// المطلوب: نعد كام شمعة طولها يساوي أطول طول موجود


function birthdayCakeCandles(candles) {
    let maxHeight = Math.max(...candles);
    return candles.filter(c => c === maxHeight).length;
}
console.log(birthdayCakeCandles([3, 2, 1, 3]));

// الطريقة الثانية
function birthdayCakeCandles(candles) {
    let tallest = Math.max(...candles); // نجيب أطول طول
    let count = 0; // عشان نعد الشموع اللي طولها يساوي الأطول
    for (let candle of candles) {
        if (candle === tallest) {
            count++; // نزيد العداد لو الشمعة دي هي الأطول
        }
    }
    return count; // نرجع عدد الشموع اللي طولها يساوي الأطول
  
}
console.log(birthdayCakeCandles([3, 2, 1, 3]));
