const express = require('express')
const path = require('path')
const app = express()
const morgan = require('morgan')
const handel = require('express-handlebars').engine
const route = require('./routes')

// const MongoStore = require('connect-mongo');

const port = 3000


// app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())


app.engine(
  'hbs',
  handel({
    extname: '.hbs',
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname, 'resources', 'views', 'layouts'),
    helpers: {
      sum: (a,b) => a+b,
    }
  
  })
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

