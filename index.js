const baseUrl = "https://rentrapi100.azurewebsites.net/api/Rentritem"
Vue.createApp({
    data() {
        return {
            RentrItem:[],
            addData:{name:"", price:0, quantity:0},
            addMessage: "",
            nameToGetBy:"",
            
        }
    },
    methods: {
        GetAllItems(){
            this.helperGetAndShow(baseUrl)
        },
        

        GetByName(name){
            const url = baseUrl +"?name=" + name
            this.helperGetAndShow(url)


        },

        async helperGetAndShow(url){
            try{
                const response = await axios.get(url)
                this.RentrItem = await response.data
            } catch(ex){
                alert(ex.message)
            }
        },
        
        async deleteItem(deleteId) {
            const url = baseUrl + "/" + deleteId
            try {
                response = await axios.delete(url)
                this.deleteMessage = response.status + " " + response.statusText
                this.GetAllItems()
            } catch (ex) {
                alert(ex.message)
            }
        },

        async addItem() {
            try {
                response = await axios.post(baseUrl, this.addData)
                this.addMessage = "response " + response.status + " " + response.statusText
                this.GetAllItems()
            } catch (ex) {
                alert(ex.message)
            }
        },
        
    },
}).mount("#app")