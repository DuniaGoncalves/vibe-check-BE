const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());

let moods = [];

// Get all moods
app.get('/moods', (req, res) => {
  res.json(moods);
});

// Add Mood
app.post('/moods', (req, res) => {
  const { mood, note } = req.body;
  if (!mood) {
    return res.status(400).json({ error: 'Mood is required' });
  }
  const newMood = { id: Date.now(), mood, note: note || '', date: new Date() };
  moods.push(newMood);
  res.status(201).json(newMood);
});

//Delete Mood
app.delete('/moods/:id', (req, res) => {
  const { id } = req.params;
  moods = moods.filter((m) => m.id !== parseInt(id));
  res.status(204).send();
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));