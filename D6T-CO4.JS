class UberPriceCalculator {
    constructor() {
      this.baseFare = 80;
      this.costPerKilometer = 8;
      this.costPerMinute = 3.0;
      this.bookingFee = 45;
    }
  
    calPrice(distanceInKilometers, timeInMinutes) {
      
      var distanceCost = this.costPerKilometer * distanceInKilometers;
      var timeCost     = this.costPerMinute * timeInMinutes;

      var totalPrice   = this.baseFare + distanceCost + timeCost + this.bookingFee;
  
      return totalPrice;
    }
  }
  

  var calculator           = new UberPriceCalculator();
  var distanceInKilometers = 5; 
  var timeInMinutes        = 30; 
  
  var Price = calculator.calPrice(distanceInKilometers, timeInMinutes);
  console.log(`Uber price is: ₹${Price}`);
