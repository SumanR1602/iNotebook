const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Suman:Suman%40Atlas@inotebookcluster.du83u.mongodb.net/?retryWrites=true&w=majority&appName=iNotebookCluster";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
    }
};

module.exports = connectToMongo;
