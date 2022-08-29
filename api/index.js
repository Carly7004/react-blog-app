const express = require('express');
const cors = require('cors');

const app = express();

const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require('multer')

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_CONNECTIOM_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log('MongoDB Connected')).catch(((err) => console.log(err)));

//Image upload using multer package
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, req.body.name);
    }
})
const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
    res.status(200).json('file has been upload')
})

const port = 5000;
app.use(cors({
    origin: "http://localhost:3000"
}))

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);

app.use('/', (req, res) => {
    console.log('this is Carly main page');
})

app.listen(port, () => {
    console.log('Server is running')
})

