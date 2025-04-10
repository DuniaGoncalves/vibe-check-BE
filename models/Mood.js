const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
  mood: { type: String, required: true },
  note: { type: String, default: '' },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Mood', moodSchema);
