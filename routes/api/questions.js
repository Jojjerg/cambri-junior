const express  = require('express')
const router = express.Router()
const Question = require('../../model/Question')


//Получаем все вопросы из бд 
router.get('/', async(req, res) => {
    try {
        const questions = await Question
        .find()
        .populate('lesson')
        if(!questions) throw new Error('Список пуст')
        const sorted = questions.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json({
            allQuestions: sorted
        }) 
    }
    catch(err){
        res.status(500).json({ msg: err.message })
    }
})
//Получаем определенный вопрос из бд  
router.get('/:id', async(req, res) => {
    const { id } = req.params
    try {
        const question = await Question
        .findById(id)
        .populate('lesson')
        if(!question) throw new Error('Нет такого урока')
        res.status(200).json({
            currentQuestion: question
        })
    }
    catch(err){
        res.status(500).json({ msg: err.message })
    }
})
//Добавляем вопрос в бд 
router.post('/', async(req, res) =>{
    const newQuestion = new Question(req.body)
        try {
            const question = await newQuestion.save()
            if(!question) throw new Error('Что то пошло не так при сохранении question')
            res.status(201).json({
                postedQuestion: question,
                msg: 'Урок был успешно добавлен'
            })
        }
        catch(err){
            res.status(500).json({ msg: err.message})
        }
})
//Обновляем вопрос из бд
router.patch("/:id", async(req, res) => {
    const { id } = req.params
    
    try {
        const response = await Question
        .findByIdAndUpdate(id, req.body)
        .populate('lesson')
        if(!response) throw Error('Что то пошло нет так с обновлением данных')
        const updated = { ...res._doc, ...req.body }
        res.status(200).json({
            updatedQuestion: updated,
            msg: 'Урок успешно обновлен'
        })
    }
    catch(err){
        res.status(500).json({ msg: err.message})
    }
})
//Удаляем вопрос из бд
router.delete('/:id', async(req, res) => {
    const { id } = req.params

    try{
        const removed = await Question.findByIdAndDelete(id)
        if(!removed) throw Error('Урок уже удален')
        res.status(200).json({
            removedQuestion: removed,
            msg: 'Урок успешно удален'
        })
    }
    catch(err){
        res.status(500).json({ msg: err.message})
    }
})

module.exports = router
