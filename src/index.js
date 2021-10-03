const express = require('express')
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000


app.use(express.static(path.join(__dirname, 'public')))
// HTTP loger
app.use(morgan('combined'))
// Template engine
app.engine('hbs', handlebars({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
//CONFIG LINK FILE
app.set('views', path.join(__dirname, 'resources/views'));

// console.log('PATH: ', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
