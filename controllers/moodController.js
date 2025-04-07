const Mood = require('../models/Mood');

// Get all moods
const getMoods = (req, res) => {
  Mood.find().sort({ date: -1 })
    .then((moods) => res.json(moods))
    .catch(() => res.status(500).json({ error: 'Failed to fetch moods' }));
};

// Create a mood
const createMood = (req, res) => {
  console.log('POST /moods payload:', req.body);

  const { mood, note } = req.body;
  if (!mood) return res.status(400).json({ error: 'Mood is required' });

  const newMood = new Mood({ mood, note });
  newMood.save()
  .then(savedMood => {
    console.log('Mood saved:', savedMood);
    res.status(201).json(savedMood);
  })
  .catch(err => {
    console.error('Error saving mood to DB:', err.message);
    res.status(500).json({ error: 'Failed to save mood' });
  });
};

// Delete a mood
const deleteMood = (req, res) => {
  Mood.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).end())
    .catch(() => res.status(500).json({ error: 'Failed to delete mood' }));
};

module.exports = { getMoods, createMood, deleteMood };
