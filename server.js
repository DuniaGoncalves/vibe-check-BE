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

//Delete Mood


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));