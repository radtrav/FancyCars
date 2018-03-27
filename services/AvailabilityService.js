const availabilities = require('../db/availabilities');

module.exports = {
  getAll: () => availabilities,
};