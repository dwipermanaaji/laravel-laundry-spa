import $axios from '../api.js';

const state = () => ({
    notifications:[]
})

const mutations = {
    ASSIGN_DATA(state, payload){
        state.notifications = payload
    }
}

const actions ={
    getNotifications({commit}){
        return new Promise((resolve, reject)=>{
            $axios.get(`/notification`)
            .then((response)=>{
                commit('ASSIGN_DATA',response.data.data);
                resolve(response.data)
            })
        })
    },
    readNotification({dispatch},payload){
        return new Promise((resolve, reject) => {
            //UNTUK MENGUPDATE DATA NOTIFIKASI BAHWA NOTIF TERSEBUT SUDAH DIBACA
            $axios.post(`/notification`, payload)
            .then((response) => {
                //AMBIL DATA NOTIFIKASI TERBARU
                dispatch('getNotifications').then(() => resolve(response.data))
            })
        })  
    }

}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}