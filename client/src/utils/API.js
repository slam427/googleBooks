import axios from 'axios';


export default {
    googleBookSearch: function (searchInput) {
        return axios.get("/api/google", {params: {q: 'title:' + searchInput}})
    },
}

