document.getElementById('all-reviews-btn').addEventListener('click', function() {
    // Select all review rows except the first one
    var additionalRows = document.querySelectorAll('.review-row:not(:first-of-type)');
    
    // Determine whether we are showing or hiding the additional rows based on the first additional row's visibility
    var isExpanding = additionalRows[0].classList.contains('hidden');
    
    // Toggle visibility of each additional row
    additionalRows.forEach(function(row) {
      row.classList.toggle('hidden', !isExpanding); // Remove 'hidden' class to show, add to hide
    });

    // Update button text accordingly
    this.textContent = isExpanding ? 'Show Less' : 'All Reviews';
});
