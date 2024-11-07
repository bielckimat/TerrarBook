const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(cors()); 

app.get('/api/animals', (req, res) => {
  const animals = [
    { name: 'Lion', type: 'Mammal' },
    { name: 'Eagle', type: 'Bird' }
  ];
  res.json(animals); 
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
