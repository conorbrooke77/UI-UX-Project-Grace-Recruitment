const dailyRates = {
    sousChef: 120,    // Daily rate for Sous Chef
    seniorChef: 150,  // Daily rate for Senior Chef
    reliefCook: 100,  // Daily rate for Relief Cook
    prepCook: 80      // Daily rate for Prep Cook
  };

  // Function to calculate total staff and payment
  function calculateTotals() {
    const sousChefCount = parseInt(document.getElementById('sous-chef').value) || 0;
    const seniorChefCount = parseInt(document.getElementById('Senior-chef').value) || 0;
    const reliefCookCount = parseInt(document.getElementById('relief-cook').value) || 0;
    const prepCookCount = parseInt(document.getElementById('prep-cook').value) || 0;
    const duration = parseInt(document.getElementById('duration').value) || 0;

    const totalStaff = sousChefCount + seniorChefCount + reliefCookCount + prepCookCount;

    var totalPayment = (sousChefCount * dailyRates.sousChef) + 
                         (seniorChefCount * dailyRates.seniorChef) + 
                         (reliefCookCount * dailyRates.reliefCook) + 
                         (prepCookCount * dailyRates.prepCook);

    var totalPayment = totalPayment * duration;                   

    document.querySelector('.total-staff').textContent = totalStaff;
    document.querySelector('.total-payment').textContent = totalPayment;
  }

  // Add event listeners to select elements
  document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', calculateTotals);
  });

  // Initial calculation on page load
  document.addEventListener('DOMContentLoaded', calculateTotals);