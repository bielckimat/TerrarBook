const mc = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/'
const dbName = 'TerraBook'
const conlectionTerrarimName = 'Terrariums'
const conlectionAniemalName = "Animal"


async function initialMongDb() {
    try {
      const client = await mc.connect(url,);
      console.log('Conetion mongoDb!');
  
      const db = client.db(dbName);
      
     
      const collections = await db.listCollections().toArray();
      
      if(!collections.find(c => c.name===conlectionTerrarimName))
        await db.createCollection(conlectionTerrarimName)

          let terrariums = db.collection(conlectionTerrarimName)
          if(await terrariums.countDocuments({}, { hint: "_id_" })<1)
             await terrariums.insertMany([{x : 10,y : 10 , materials: 'glass'},
                                   {x : 20,y : 20 , materials: 'glass'}])
          else{
            console.log("Terraria on Storege")
          }


        if(collections.find(c => c.name===conlectionAniemalName))
         await db.createCollection(conlectionAniemalName)


            let animals = db.collection(conlectionAniemalName)
            
            if(await animals.countDocuments({}, { hint: "_id_" })<1)
               await animals.insertMany([{name : 'Leon', type : 'spider' , region: 'Poland'},
                                         {name :'Madzia' ,type : 'scorpiopn' , region: 'RPA'}])
            else{
              console.log("Animals in noteBook")
            }
          
          
     
      
      client.close();
      console.log('Close conect mongoDb!');
    } catch (err) {
      console.error('Conecting mongoDb Error:', err);
    }

  }

async function readAllAnimal() {
  const client = await mc.connect(url,);
      console.log('Conetion mongoDb!');
  
      const db = await client.db(dbName);
       r = await db.collection(conlectionAniemalName).find({}).toArray();
      
       client.close();
       return r 
}

async function addAnimal(body) {
  const client = await mc.connect(url,);
      console.log('Conetion mongoDb!');
      const db = client.db(dbName);
      let animals = db.collection(conlectionAniemalName)
      await animals.insertOne(body)
  client.close();
}


module.exports ={
  initialMongDb,
  readAllAnimal,
  addAnimal            
}