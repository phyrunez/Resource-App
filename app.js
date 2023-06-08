const app = Vue.createApp({
    data() {
        return {
            enteredVal: '',
            state: false,
            enteredColor: ''
        }
    },
    computed: {
        userClasses() {
            if(this.enteredVal === 'user1') {
                return { user1: true }
            }else if(this.enteredVal === 'user2') {
                return { user2: true }
            }
        }
    },
    methods: {
        changeState() {
            this.state = !this.state
            console.log(this.state)
        }
    }
})
app.mount("#assignment")