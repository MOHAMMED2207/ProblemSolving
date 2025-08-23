// Time Conversion
function timeConversion(s) {
  let [time, modifier] = [s.slice(0, 8), s.slice(8)];
  let [hours, minutes, seconds] = time.split(":");
  if (modifier === "PM" && hours !== "12") hours = String(Number(hours) + 12);
  if (modifier === "AM" && hours === "12") hours = "00";
  return `${hours}:${minutes}:${seconds}`;
}
console.log(timeConversion("12:05:45AM"));

// 🧑‍💻 حل بطريقة Clean Code
function timeConversion(time12h) {
  const period = time12h.slice(-2); // AM أو PM
  let [hour, minute, second] = time12h.slice(0, -2).split(":");

  hour = convertHour(hour, period);

  return `${hour}:${minute}:${second}`;
}

function convertHour(hour, period) {
  if (period === "AM") {
    return hour === "12" ? "00" : hour.padStart(2, "0");
  } else {
    // PM
    return hour === "12" ? "12" : String(Number(hour) + 12);
  }
}
// أمثلة:
console.log(timeConversion("07:05:45PM")); // 19:05:45
console.log(timeConversion("12:01:00AM")); // 00:01:00
console.log(timeConversion("12:01:00PM")); // 12:01:00
