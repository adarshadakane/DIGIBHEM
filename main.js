document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form values
    var name = document.getElementById("name").value;
    var checkInDate = document.getElementById("check-in").value;
    var totalDays = parseInt(document.getElementById("total-days").value);
    var totalPersons = parseInt(document.getElementById("total-persons").value);
    var roomType = document.getElementById("room-type").value;
    var amenities = [];
    if (document.getElementById("ac").checked) {
      amenities.push("AC");
    }
    if (document.getElementById("locker").checked) {
      amenities.push("Locker");
    }
    var advancePayment = parseInt(document.getElementById("advance-payment").value);
  
    // Room rates
    var roomRates = {
      deluxe: 2500,
      suite: 4000,
      ac: 1000,
      locker: 300
    };
  
    // Additional charges for extra persons
    var additionalPersonCharge = 1000;
    var extraPersons = Math.max(totalPersons - 2, 0);
    var additionalCharges = additionalPersonCharge * extraPersons * totalDays;
  
    // Calculate total cost
    var roomRate = roomRates[roomType];
    var totalCost = (roomRate + additionalCharges) * totalDays;
  
    // Calculate balance amount
    var balanceAmount = totalCost - advancePayment;
  
    // Perform booking logic here
    // You can send the form data to a server for processing, save it to a database, etc.
  
    // Show booking details
    alert("Booking Successful!\n\nName: " + name + "\nCheck-in Date: " + checkInDate + "\nTotal Number of Days: " + totalDays + "\nTotal Number of Persons: " + totalPersons + "\nRoom Type: " + roomType + "\nAmenities: " + amenities.join(", ") + "\nAdvance Payment: " + advancePayment + "\n\nTotal Cost: " + totalCost + "\nBalance Amount: " + balanceAmount);
  });
  