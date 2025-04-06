const express = require('express');
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}

const app = express();
app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  res.json({ moods: ['happy', 'sad', 'angry', 'excited'] });
});

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});