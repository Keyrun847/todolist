const express = require('express');
const router = require('./routes/home');
const db = require('./config/mongoose');
const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('./assets'));
app.use('/', router);

app.listen(PORT, (err) => {
    if(err) console.error.bind(console, 'Error running server');
    else    console.log(`Server running on PORT: ${PORT}`);
})