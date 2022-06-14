import axios from 'axios'


const state = {
    users: {},
    status: '',
    error_user: null,
}

const getters = {
    users: state => state.users,
    error_users: state => state.error_users
}

const actions = {
    async getUsers({commit}){
        try{
            commit('get_data_req')
            let res = await axios.get(`http://localhost:5000/api/users/`)
            commit('get_data_res', res.data.users)
            console.log(res)
            return res
        }
        catch(err){
            commit('get_data_error_users', err)
        }
    },
    // async getusersById({commit},id){
    //     try{
    //         commit('get_data_spec_req')
    //         let res = await axios.get(`http://localhost:5000/api/users/lectures_list/${id}`)
    //         commit('get_data_spec_res', res.data.user)
    //         return res
    //     }
    //     catch(err){
    //         commit('get_data_spec_error_user', err)
    //     }
    // },
    // async adduser({commit},userData){
    //     try {
    //         commit('add_data_user_req')
    //         let res = await axios.post(`http://localhost:5000/api/users/lectures_list__add`,userData)
    //         if(res.data.success !== undefined) commit('add_data_user_res')
    //         return res
    //     }
    //     catch(err){
    //         commit('add_data_user_error_user', err)
    //     }
    // },
    // async updateuser({commit},id,userData){
    //     try{
    //         commit('update_data_user_req')
    //         let res = await axios.patch(`http://localhost:5000/api/users/lectures_list__update/${id}`,userData)
    //         if(res.data.success !== undefined) commit('update_data_user_res')
    //         return res
    //     }
    //     catch(err){
    //         commit('update_data_user_error_user', err)
    //     }
    // },
    // async deleteuser({commit},id){
    //     try{
    //         commit('delete_data_user_req')
    //         let res = await axios.delete(`http://localhost:5000/api/users/lectures_list__delete/${id}`)
    //         if(res.data.success !== undefined) commit('delete_data_user_res')
    //         return res
    //     }
    //     catch(err){
    //         commit('delete_data_user_error_user', err)
    //     }
    // },
}

const mutations = {
    get_data_req(state){
        state.status = 'loading'
    },
    get_data_res(state, user){
        state.user = user
    },
    get_data_error_users(state, err){
        state.error_users = err.response.data.msg
    },
    // get_data_spec_req(state){
    //     state.status = 'loading'
    // },
    // get_data_spec_res(state, user){
    //     state.user = user
    // },
    // get_data_spec_error_user(state, err){
    //     state.error_user = err.response.data.msg
    // },
    // add_data_user_req(state){
    //     state.status = 'loading'
    // },
    // add_data_user_res(state, userData){
    //     state.status = 'success',
    //     state.user = userData
    // },
    // add_data_user_error_user(state, err){
    //     state.error_user = err.response.data.msg
    // },
    // update_data_user_req(state){
    //     state.status = 'loading'
    // },
    // update_data_user_res(state, userData){
    //     state.status = 'success',
    //     state.user = userData
    // },
    // update_data_user_error_user(state, err){
    //     state.error_user = err.response.data.msg
    // },
    // delete_data_user_req(state){
    //     state.status = 'loading'
    // },
    // delete_data_user_res(state){
    //     state.status = 'success'
    // },
    // delete_data_user_err(state,err){
    //     state.error_user = err.response.data.msg
    // }
}

export  default{
    state,
    actions,
    mutations,
    getters
}
