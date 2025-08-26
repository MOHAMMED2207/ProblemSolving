// Grading Students
function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade < 38) return grade; // ما يتعدلش
    const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
    const difference = nextMultipleOf5 - grade;
    return difference < 3 ? nextMultipleOf5 : grade;
  });
}

console.log(gradingStudents([73, 67, 38, 33]));
