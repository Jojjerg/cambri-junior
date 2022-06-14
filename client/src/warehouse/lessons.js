import axios from 'axios'


const state = {
    lesson: {},
    status: '',
    error_lesson: null,
}

const getters = {
    lesson: state => state.lesson,
    error_lesson: state => state.error_lesson
}

const actions = {
    async getLessons({commit}){
        try{
            commit('get_data_req')
            let res = await axios.get(`http://localhost:5000/api/lessons/`)
            commit('get_data_res', res.data.lesson)
            console.log(res)
            return res
        }
        catch(err){
            commit('get_data_error_lesson', err)
        }
    },
    async getLessonsById({commit},id){
        try{
            commit('get_data_spec_req')
            let res = await axios.get(`http://localhost:5000/api/lessons/lectures_list/${id}`)
            commit('get_data_spec_res', res.data.lesson)
            return res
        }
        catch(err){
            commit('get_data_spec_error_lesson', err)
        }
    },
    async addLesson({commit},lessonData){
        try {
            commit('add_data_lesson_req')
            let res = await axios.post(`http://localhost:5000/api/lessons/lectures_list__add`,lessonData)
            if(res.data.success !== undefined) commit('add_data_lesson_res')
            return res
        }
        catch(err){
            commit('add_data_lesson_error_lesson', err)
        }
    },
    async updateLesson({commit},id,lessonData){
        try{
            commit('update_data_lesson_req')
            let res = await axios.patch(`http://localhost:5000/api/lessons/lectures_list__update/${id}`,lessonData)
            if(res.data.success !== undefined) commit('update_data_lesson_res')
            return res
        }
        catch(err){
            commit('update_data_lesson_error_lesson', err)
        }
    },
    async deleteLesson({commit},id){
        try{
            commit('delete_data_lesson_req')
            let res = await axios.delete(`http://localhost:5000/api/lessons/lectures_list__delete/${id}`)
            if(res.data.success !== undefined) commit('delete_data_lesson_res')
            return res
        }
        catch(err){
            commit('delete_data_lesson_error_lesson', err)
        }
    },
}

const mutations = {
    get_data_req(state){
        state.status = 'loading'
    },
    get_data_res(state, lesson){
        state.lesson = lesson
    },
    get_data_error_lesson(state, err){
        state.error_lesson = err.response.data.msg
    },
    get_data_spec_req(state){
        state.status = 'loading'
    },
    get_data_spec_res(state, lesson){
        state.lesson = lesson
    },
    get_data_spec_error_lesson(state, err){
        state.error_lesson = err.response.data.msg
    },
    add_data_lesson_req(state){
        state.status = 'loading'
    },
    add_data_lesson_res(state, lessonData){
        state.status = 'success',
        state.lesson = lessonData
    },
    add_data_lesson_error_lesson(state, err){
        state.error_lesson = err.response.data.msg
    },
    update_data_lesson_req(state){
        state.status = 'loading'
    },
    update_data_lesson_res(state, lessonData){
        state.status = 'success',
        state.lesson = lessonData
    },
    update_data_lesson_error_lesson(state, err){
        state.error_lesson = err.response.data.msg
    },
    delete_data_lesson_req(state){
        state.status = 'loading'
    },
    delete_data_lesson_res(state){
        state.status = 'success'
    },
    delete_data_lesson_err(state,err){
        state.error_lesson = err.response.data.msg
    }
}

export  default{
    state,
    actions,
    mutations,
    getters
}
