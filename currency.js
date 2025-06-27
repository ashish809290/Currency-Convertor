function convertCurrency() {
  let amount = document.getElementById("amount").value;
  let fromCurrency = document.getElementById("fromCurrency").value;
  let toCurrency = document.getElementById("toCurrency").value;
  
  if (amount === "") {
    alert("Please enter an amount to convert.");
    return;
  }

  // Here we would use an API to get real-time exchange rates.
  // For simplicity, let's use static exchange rates.
  const exchangeRates = {
    USD: {
      EUR: 0.93,
      INR: 82.12,
      GBP: 0.82
    },
    EUR: {
      USD: 1.08,
      INR: 88.22,
      GBP: 0.88
    },
    INR: {
      USD: 0.012,
      EUR: 0.011,
      GBP: 0.010
    },
    GBP: {
      USD: 1.22,
      EUR: 1.14,
      INR: 100.5
    }
  };

  if (fromCurrency === toCurrency) {
    document.getElementById("convertedAmount").textContent = amount;
    return;
  }

  let convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
  document.getElementById("convertedAmount").textContent = convertedAmount.toFixed(2);
}