require('dotenv').config();
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const multer = require('multer');
const cloudinary = require('cloudinary');
const app = express();
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.urlencoded({extended: false}));
app.get('/', function(req,res) {
    res.send('Welcome to my Express Cloudinary App');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})