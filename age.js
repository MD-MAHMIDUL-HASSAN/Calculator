// Function to set the current date in the 'Calculate Age Till' field on page load
function setTodayDateOnLoad() {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    document.getElementById('calculatedate').value = today;
  }
  
  // Function to calculate age
  function calculateAge() {
    const birthDate = new Date(document.getElementById('birthdate').value);
    const calculateDate = new Date(document.getElementById('calculatedate').value);
  
    if (!birthDate || !calculateDate || birthDate > calculateDate) {
      document.getElementById('result').textContent = 'Please select valid dates.';
      return;
    }
  
    // Calculate difference in milliseconds
    let diff = calculateDate - birthDate;
  
    // Time calculations for years, months, days, etc.
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    diff -= years * (1000 * 60 * 60 * 24 * 365.25);
  
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
    diff -= months * (1000 * 60 * 60 * 24 * 30.44);
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
  
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
  
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
  
    const seconds = Math.floor(diff / 1000);
  
    // Display the result
    document.getElementById('result').textContent = `Age: ${years} Years, ${months} Months, ${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
  }
  
  // Function to set the current date when 'Till Today' button is clicked
  function setTodayDate() {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    document.getElementById('calculatedate').value = today;
  }
  
  // Event listeners
  document.getElementById('calculateBtn').addEventListener('click', calculateAge);
  document.getElementById('todayBtn').addEventListener('click', setTodayDate);
  
  // Set the default date in 'Calculate Age Till' field on page load
  window.onload = setTodayDateOnLoad;
  
  
  const menu = document.getElementById('menu');
menu.style.display = 'none';
function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}
