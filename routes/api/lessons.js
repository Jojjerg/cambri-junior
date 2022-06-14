const express  = require('express')
const router = express.Router()
const Lesson = require('../../model/Lesson')


//Получаем все лекции из бд 
router.get('/', async(req, res) => {
    try{
        const lessons = await Lesson
        .find()
        if(!lessons) throw new Error('Список пуст')
        const sorted = lessons.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json({
            allLessons: sorted
        }) 
    }
    catch(err){
        res.status(500).json({ msg: err.message })
    }
})
//Получаем определенную лекцию из бд  
router.get('/:id', async(req, res) => {
    const { id } = req.params
    try{
        const lesson = await Lesson
        .findById(id)
        if(!lesson) throw new Error('Нет такого урока')
        res.status(200).json({
            currentLesson: lesson
        })
    }
    catch(err){
        res.status(500).json({ msg: err.message })
    }
})
//Добавляем лекцию в бд 
router.post('/', async(req, res) =>{
    const newlesson = new Lesson(req.body)
        try{
            const lesson = await newlesson.save()
            if(!lesson) throw new Error('Что то пошло не так при сохранении lesson')
            res.status(201).json({
                postedLesson: lesson,
                msg: 'Урок был успешно добавлен'
            })
        }
        catch(err){
            res.status(500).json({ msg: err.message})
        }
})
//Обновляем данные лекции из бд
router.patch("/:id", async(req, res) => {
    const { id } = req.params
    
    try{
        const response = await Lesson
        .findByIdAndUpdate(id, req.body)
        if(!response) throw Error('Что то пошло нет так с обновлением данных')
        const updated = { ...res._doc, ...req.body }
        res.status(200).json({
            updatedLesson: updated,
            msg: 'Урок успешно обновлен'
        })
    }
    catch(err){
        res.status(500).json({ msg: err.message})
    }
})
//Удаляем лекцию из бд
router.delete('/:id', async(req, res) => {
    const { id } = req.params

    try{
        const removed = await Lesson.findByIdAndDelete(id)
        if(!removed) throw Error('Урок уже удален')
        res.status(200).json({
            removedLesson: removed,
            msg: 'Урок успешно удален'
        })
    }
    catch(err){
        res.status(500).json({ msg: err.message})
    }
})

module.exports = router
