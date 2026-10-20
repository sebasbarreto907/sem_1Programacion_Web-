const form = document.querySelector("#temperature-form");
const celsiusInput = document.querySelector("#celsius");
const results = document.querySelector("#results");
const fahrenheitOutput = document.querySelector("#fahrenheit");
const kelvinOutput = document.querySelector("#kelvin");

const numberFormat = new Intl.NumberFormat("es-CO", {
  maximumFractionDigits: 2,
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!celsiusInput.reportValidity()) {
    return;
  }

  const celsius = celsiusInput.valueAsNumber;

  if (!Number.isFinite(celsius)) {
    celsiusInput.setCustomValidity("Ingresa una temperatura válida.");
    celsiusInput.reportValidity();
    celsiusInput.setCustomValidity("");
    return;
  }

  fahrenheitOutput.value = numberFormat.format((celsius * 9) / 5 + 32);
  kelvinOutput.value = numberFormat.format(celsius + 273.15);
  results.hidden = false;
});