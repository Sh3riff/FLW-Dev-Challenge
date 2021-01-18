const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const products = require('./routes/product');
const {users, userAuth} = require('./routes/user');
require('dotenv').config()

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(userAuth)

app.get('/', function (req, res) {
    res.json("Server loading...")
});

app.use('/products', products);
app.use('/users', users);


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true
}, (err, data) => {
    if(err) return console.log(err.message)
    console.log(`connected to Mongo Atlas`)
});

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server listening on PORT ${port}`))