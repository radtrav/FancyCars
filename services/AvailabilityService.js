const availabilities = require('../db/availabilities');

module.exports = {
  findAll: () => availabilities,
  findById: (id) => availabilities.find((a) => a.id === id).available,
};