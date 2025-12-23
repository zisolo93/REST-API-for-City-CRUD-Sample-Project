const express = require('express');
const cityRoutes = require('./routes/cityRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/cities', cityRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'we are traveling to the city ' });
});

app.listen(PORT, () => {
  console.log('Server is start traveling to the city using this tunnel', PORT);
});

