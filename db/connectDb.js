import mongoose from "mongoose";

// options for the connection
const options = {
    dbName: "dummyChaos",
}

mongoose.set('strictQuery',true)
// helper function for connection
const connectDb = async (databaseUrl) => {
    try {
    await mongoose.connect(databaseUrl, {
            ...options,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });        
    console.log("Connected Successfully")
    }
    catch (error) {
        console.log("Error catched in connectDb.js",error)
    }
}

export { connectDb };
