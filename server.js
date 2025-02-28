const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  res.json({ moods: ['happy', 'sad', 'angry', 'excited'] });
});

app.listen(8787, () => {
  console.log('Server running on http://localhost:8787');
});