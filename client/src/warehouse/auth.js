import axios from 'axios'
import router from '../router'

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    error: null,
    updateAt: null
}

const getters = {
    //isAdminIn: state => !!state.user.role !== 'Admin',
    isLoggedIn: state => !!state.token,
    isPayed: state => !!state.user.payed,
    user: state => state.user,
    error: state => state.error
}

const actions = {
    async login({ commit }, user){
        try {
            commit('auth_request')
            let res = await axios.post('http://localhost:5000/api/users/login', user)
            if(res.data.success){
                const token = res.data.token
                const user = res.data.user
//Сохраняем токен в локальное хранилище
                localStorage.setItem('token', token)
//Устанавливаем стандарты axios
                axios.defaults.headers.common['Authorization'] = token
                commit('auth_success', token, user)
            }
            return res
        }
        catch (err)
        {
            commit('auth_error', err)
        }
    },
//Вызов метода регистрации
    async register({commit}, userData){
        try {
            commit('register_request')
            let res = await axios.post('http://localhost:5000/api/users/register', userData)
            if(res.data.success !== undefined){
                commit('register_success')
            }
            return res
        }
        catch (err)
        {
            commit('register_error', err)
        }
    },
// Вызов метода получения данных аккаунта
    async getProfile({commit}){
        commit('get_data_request')
        let res = await axios.get('http://localhost:5000/api/users/profile/')
        commit('got_data_user', res.data.user)
        console.log(res)
        return res
    },
// Вызов метода изменения данных аккаунта
    async update({commit}, id, updatedUser){
        try {
            commit('change_data_request')
            let res = await axios.patch('http://localhost:5000/api/users/profile/' + id, updatedUser)
            if(res.data.success !== undefined){
                commit('change_data_success')
            }
            return res
        }
        catch (err)
        {
            commit('change_data_error', err)
        }
    },
//Вызов метода выхода из аккаунта
    async logout({commit}){
        localStorage.removeItem('token')
        commit('logout')
        delete axios.defaults.headers.common['Authorization']
        await router.push('/login')
    }
}

const mutations = {
    auth_request(state){
        state.error = null
        state.status = 'loading'
    },
    auth_success(state, token, user){
        state.error = null
        state.token = token
        state.user = user
        state.status = 'success'
    },
    auth_error(state, err){
        state.error = err.response.data.msg
    },
    register_request(state){
        state.error = null
        state.status = 'loading'
    },
    register_success(state){
        state.error = null
        state.status = 'success'
    },
    register_error(state, err){
        state.error = err.response.data.msg
    },
    get_data_request(state){
        state.status = 'loading'
    },
    got_data_user(state, user){
        state.user = user
    },
    change_data_request(state){
        state.status = 'loading'
    },
    change_data_success(state, user){
        state.error = null
        state.status = 'success'
        state.user = user
    },
    change_data_error(state, err){
        state.error = err.response.data.msg
    },
    logout(state){
        state.error = null
        state.status = ''
        state.token = ''
        state.user = ''
    }
}

export  default{
    state,
    actions,
    mutations,
    getters
}
