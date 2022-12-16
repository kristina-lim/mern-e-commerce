const mongoose = require('mongoose');
const costumeSchema = require('./costumeSchema');

module.exports = mongoose.model('Costume', costumeSchema);