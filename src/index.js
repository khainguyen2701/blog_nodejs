const express = require('express')
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000
const route = require('./routes/index')


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended:true
}))
// HTTP loger
// app.use(morgan('combined'))
// Template engine
app.engine('hbs', handlebars({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
//CONFIG LINK FILE
app.set('views', path.join(__dirname, 'resources/views'));


//route init
route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
