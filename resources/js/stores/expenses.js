import $axios from '../api.js';

const state = ()=>({
    expenses:[],
    page:1
})

const mutations = {
    ASSIGN_DATA(state, payload){
        state.expenses = payload
    },
    SET_PAGE(state, payload){
        state.page = payload
    }
}

const actions = {
    getExpenses({commit, state}, payload){
        let search = typeof payload != 'undefined' ? payload : '';
        return new Promise((resolve, reject)=>{
            $axios.get(`/expenses?page=${state.page}&q=${search}`)
            .then((response)=>{
                commit('ASSIGN_DATA', response.data)
                resolve(response.data)
            })
        })
    },
    submitExpenses({dispatch, state},payload){
        return new Promise((resolve, reject)=>{
            $axios.post(`/expenses`,payload)
            .then((response)=>{
                dispatch('getExpenses').then(()=>{
                    resolve(response.data)
                })
            })
            .catch((error) => {
                //JIKA VALIDASI ERROR
                if (error.response.status == 422) {
                    //MAKA ERRORNYA DI ASSIGN KE STATE ERRORS
                    commit('SET_ERRORS', error.response.data.errors, { root: true })
                }
            })            
        })
    },
    //FUNGSI INI UNTUK MENGAMBIL SINGLE DATA
    editExpenses({ commit }, payload) {
        return new Promise((resolve, reject) => {
            //MENGIRIMKAN PERMINTAAN KE BACKEND UNTUK MENGAMBIL DATA BERDASARKAN ID
            $axios.get(`/expenses/${payload}/edit`)
            .then((response) => {
                resolve(response.data)
            })
        })
    },
    //FUNGSI INI UNTUK MENGUPDATE DATA
    updateExpenses({ commit }, payload) {
        return new Promise((resolve, reject) => {
            //MENGIRIMKAN PERMINTAAN KE SERVER UNTUK MENGUBAH DATA BERDASARKAN ID
            $axios.put(`/expenses/${payload.id}`, payload)
            .then((response) => {
                resolve(response.data)
            })
        })
    },
    acceptExpenses({ commit }, payload) {
        return new Promise((resolve, reject) => {
            //KIRIM PERMINTAAN KE SERVER UNTUK MENGUBAH VALUE JADI ACCEPT
            $axios.post(`/expenses/accept`, { id: payload })
            .then((response) => {
                resolve(response.data)
            })
        })
    },
    cancelExpenses({ commit }, payload) {
        return new Promise((resolve, reject) => {
            //KIRIM PERMINTAAN KE SERVER UNTUK MENGUBAH VALUE JADI CANCEL
            $axios.post(`/expenses/cancel`, payload)
            .then((response) => {
                resolve(response.data)
            })
        })
    },
    removeExpenses({ dispatch }, payload) {
        return new Promise((resolve, reject) => {
            //KIRIM PERMINTAAN UNTUK MENGHAPUS BERDASARKAN ID
            $axios.delete(`/expenses/${payload}`)
            .then((response) => {
                //AMBIL DATA TERBARU
                dispatch('getExpenses').then(() => resolve())
            })
        })
    },    
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}