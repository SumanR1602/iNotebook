const mongoose=require('mongoose')
const mongoURI = "mongodb+srv://Suman:<Suman@Atlas>@inotebookcluster.du83u.mongodb.net/?retryWrites=true&w=majority&appName=iNotebookCluster
";

const connectToMongo=()=>{
    mongoose.connect(mongoURI).then(()=>console.log("Connected")).catch((e)=>console.log(e.message))
}
module.exports=connectToMongo
