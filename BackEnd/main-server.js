const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
var mongo  = require('./mongoDb')
app.use(express.json({ limit: '10mb' })); // Adjust the size as needed 
app.use(express.urlencoded({ limit: '10mb', extended: true}))
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const path = require('path');
const fs = require('fs');
app.use(cors()); 
//app.use(express.json())
app.get('/api/animals',async (req, res) => {
  const animals =  await mongo.readAllAnimal()
  
  res.json(animals); 
});

app.listen(PORT, () => {
  mongo.initialMongDb()
  console.log(`Server is running on port ${PORT}`);
});


app.post('/api/add-animals',upload.single('photo'), async (req, res) => {
  try {
    const newAniml = req.body; 
    //console.log(newAniml)
    //await mongo.addAnimal(newAniml)
    const file = req.file; // Pobierz plik
    if (!file) {
      return res.status(400).send('Plik nie został przesłany!');
    }

    const targetPath = path.join(__dirname, 'uploads', `${Date.now()}-${file.originalname}`+".jpg");

    // Przenieś plik do folderu docelowego
    fs.rename( file.path,targetPath, (err) => {
      if (err) {
        console.error('Błąd przy zapisywaniu pliku:', err);
        return res.status(500).send('Nie udało się zapisać pliku!');
      }
    });
    newAniml.targetPath = targetPath;
    console.log(newAniml)
    await mongo.addAnimal(newAniml)
    console.log('Plik zapisany w:', targetPath);



    res.status(201).json("DSD"); // Zwraca dodany obiekt
  } catch (error) {
    console.error('Błąd podczas dodawania zwierzęcia:', error);
    res.status(500).json({ message: 'Błąd serwera' });
  }
});