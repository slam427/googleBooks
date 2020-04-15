import axios from 'axios';


export default {
    googleBookSearch: function (searchInput) {
        return axios.get("/api/google", {params: {q: 'title:' + searchInput}})
    },
    saveBook: function (bookToSave) {
        //whole book object gets passed to bookToSave
        //we then send this to the backend(server) to be saved in the DB
        return axios.post("/api/savebook", bookToSave)
},
    getAllBooks: function () {
        return axios.get("/api/allbooks")
    }
}
