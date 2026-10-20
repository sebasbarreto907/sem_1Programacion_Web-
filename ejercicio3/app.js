const form = document.querySelector("#bill-form");
const billTotalInput = document.querySelector("#bill-total");
const tipPercentageInput = document.querySelector("#tip-percentage");
const peopleInput = document.querySelector("#people");
const results = document.querySelector("#results");
const tipOutput = document.querySelector("#tip-amount");
const totalWithTipOutput = document.querySelector("#total-with-tip");
const perPersonOutput = document.querySelector("#per-person");

const moneyFormat = new Intl.NumberFormat("es-CO", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) {
    return;
  }

  const billTotal = billTotalInput.valueAsNumber;
  const tipPercentage = tipPercentageInput.valueAsNumber;
  const people = peopleInput.valueAsNumber;

  if (![billTotal, tipPercentage, people].every(Number.isFinite)) {
    return;
  }

  const tip = billTotal * (tipPercentage / 100);
  const totalWithTip = billTotal + tip;
  const perPerson = totalWithTip / people;

  tipOutput.value = `$${moneyFormat.format(tip)}`;
  totalWithTipOutput.value = `$${moneyFormat.format(totalWithTip)}`;
  perPersonOutput.value = `$${moneyFormat.format(perPerson)}`;
  results.hidden = false;
});