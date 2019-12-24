const express = require('express')
const path = require('path');
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const { data,id } = req.query;
    res.render('index', { data,id });
})

app.get('/create', (req, res) => {
    res.render('create', { output: req.params.id });
});


app.get('/create/submit', (req, res, next) => {
    let id = req.body.id
    res.redirect(id);
});
app.listen(port, () =>  {
    console.log('listen on port' + port);
})