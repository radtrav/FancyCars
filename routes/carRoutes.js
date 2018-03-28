const CarsService = require('../services/CarsService');
const AvailabilityService = require('../services/AvailabilityService');

module.exports = app => {
  app.get('/api/cars', (req, res) => {
    const cars = CarsService.findAll();

    // map the available property to each car
    cars.forEach(car => {
      car.available = AvailabilityService.findById(car.id);
    });

    res.send(cars);
  });

  app.get('/api/availability', (req, res) => {
    const id = req.params.id;
    const availability = AvailabilityService.findById(id);
    res.send(availability);
  });
};


// ASSUMPTION
// ----------
// I am assuming that since there is a CarService and a separate AvailabilityService
// the returned cars do no include the car's availability by default. Therefore to get the car with their
// availability status included we need to map the availabilities to the cars
