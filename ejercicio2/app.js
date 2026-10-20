const form = document.querySelector("#grades-form");
const gradeInputs = [
  document.querySelector("#grade-1"),
  document.querySelector("#grade-2"),
  document.querySelector("#grade-3"),
];
const results = document.querySelector("#results");
const averageOutput = document.querySelector("#average");

const numberFormat = new Intl.NumberFormat("es-CO", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) {
    return;
  }

  const grades = gradeInputs.map((input) => input.valueAsNumber);

  if (!grades.every(Number.isFinite)) {
    return;
  }

  const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  averageOutput.value = numberFormat.format(average);
  results.hidden = false;
});