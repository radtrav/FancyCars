const CarsService = require("../services/CarsService");


module.exports = app => {
  app.get('/api/cars', (req, res) => {
    const cars = CarsService.getAll();
    res.send(cars);
  });

};
