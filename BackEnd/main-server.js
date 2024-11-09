const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
var mongo  = require('./mongoDb')

app.use(cors()); 
app.use(express.json())
app.get('/api/animals',async (req, res) => {
  const animals =  await mongo.readAllAnimal()
  
  res.json(animals); 
});

app.listen(PORT, () => {
  mongo.initialMongDb()
  console.log(`Server is running on port ${PORT}`);
});


app.post('/api/add-animals', async (req, res) => {
  try {
    const newAnimal = req.body;
    await mongo.addAnimal(newAnimal)
    res.status(201).json("DSD"); // Zwraca dodany obiekt
  } catch (error) {
    console.error('Błąd podczas dodawania zwierzęcia:', error);
    res.status(500).json({ message: 'Błąd serwera' });
  }
});