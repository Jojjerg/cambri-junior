const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const passport = require('passport')

//Инициализация приложения
const app = express()

//Связывающее ПО
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.use(cors())
//Объявляем статичную папку
app.use(express.static(path.join(__dirname, 'public')))
//Объявляем паспорт
app.use(passport.initialize())
//Объявляем стратегию паспорта
require('./config/passport')(passport)

app.use(express.static(__dirname));
//Конфигурация БД
//const db = require('./config/keys').mongoURI
mongoose.connect('mongodb://localhost:27017/CambriJDB', {useNewUrlParser:true})
.then(() => {console.log(`DataBase connected`)})
.catch(err => {console.log(`Unable to connect ${err}`)})

//адрес обращение к пользователю
app.use('/api/users', require('./routes/api/users'))

//адрес обращение к урокам
app.use('/api/lessons', require('./routes/api/lessons'))

//адрес обращение к вопросам
app.use('/api/questions', require('./routes/api/questions'))

// //адрес обращение к ответам
app.use('/api/answers', require('./routes/api/answers'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
