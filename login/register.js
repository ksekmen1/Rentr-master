const baseUrl = "https://rentrapi100.azurewebsites.net/api/auth/register"
Vue.createApp({
    data() {
        return {
            addUser:{username:"", password:"",},
            addMessage:"",
            
        }
    },

    methods: {

        async addUsers() {
            try {
                response = await axios.post(baseUrl, this.addUser)
                this.addMessage = "response " + response.status + " " + response.statusText
                
            } catch (ex) {
                alert(ex.message)
            }
        },
        
    },
})