const connectToMongo=require('./db')
const express = require('express')
var cors=require('cors')
connectToMongo();
const app = express()
const port = 5000

app.use(cors({
  origin: "https://i-notebook-frontend-jade.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200
}));

app.use(express.json());

app.get("/",(req,res)=>{
  res.json("Hello")
})
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening on port https://i-notebook-frontend-jade.vercel.app`)
}) 

