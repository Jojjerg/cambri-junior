const express  = require('express')
const router = express.Router()
const Answer = require('../../model/Answer')


//Получаем все лекции из бд 
router.get('/', async(req, res) => {
    try{
        const answers = await Answer
        .find()
        .populate('question')
        if(!answers) throw new Error('Список пуст')
        const sorted = answers.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json({
            allAnswers: sorted
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
        const answer = await Answer
        .findById(id)
        .populate('question')
        if(!answer) throw new Error('Нет такого урока')
        res.status(200).json({
            currentAnswer: answer
        })
    }
    catch(err){
        res.status(500).json({ msg: err.message })
    }
})
//Добавляем лекцию в бд 
router.post('/', async(req, res) =>{
    const newAnswer = new Answer(req.body)
        try{
            const answer = await newAnswer.save()
            if(!answer) throw new Error('Что то пошло не так при сохранении lesson')
            res.status(201).json({
                postedAnswer: answer,
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
        const response = await Answer
        .findByIdAndUpdate(id, req.body)
        .populate('question')
        if(!response) throw Error('Что то пошло нет так с обновлением данных')
        const updated = { ...res._doc, ...req.body }
        res.status(200).json({
            updatedAnswer: updated,
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
        const removed = await Answer.findByIdAndDelete(id)
        if(!removed) throw Error('Урок уже удален')
        res.status(200).json({
            removedAnswer: removed,
            msg: 'Урок успешно удален'
        })
    }
    catch(err){
        res.status(500).json({ msg: err.message})
    }
})

module.exports = router
