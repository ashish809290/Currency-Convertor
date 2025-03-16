document.getElementById("currency-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;
  
    if (amount && fromCurrency && toCurrency) {
      convertCurrency(amount, fromCurrency, toCurrency);
    }
  });
  
  async function convertCurrency(amount, fromCurrency, toCurrency) {
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.rates && data.rates[toCurrency]) {
        const rate = data.rates[toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        
        document.getElementById("converted-amount").textContent = `${convertedAmount} ${toCurrency}`;
      } else {
        alert("Invalid currency selected.");
      }
    } catch (error) {
      console.error("Error fetching exchange rate data:", error);
      alert("Something went wrong. Please try again.");
    }
  }