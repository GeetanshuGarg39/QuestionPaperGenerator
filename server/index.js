import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/route.js';
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express(); 

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// loading routes
app.use('/', router); 

const PORT = process.env.port || 8000 

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(PORT, console.log(`Server running at port ${PORT}`)); 
