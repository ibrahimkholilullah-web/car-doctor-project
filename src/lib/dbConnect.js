import { MongoClient, ServerApiVersion } from 'mongodb';
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
//  const MONGODB_URI= "mongodb+srv://car-doctor-project:dyhVEoxSYM6uBo86@cluster0.nz4na.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

 export const collectionName = {
    servicesCollection : "cardoctor",
    users : 'users'
}
const dbConnect = (collectionName) => {
    const uri = process.env.MONGODB_URI
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
      console.log(process.env.DB_NAME,)
    return client.db(process.env.DB_NAME).collection(collectionName)
};

export default dbConnect;