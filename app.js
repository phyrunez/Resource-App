const app = Vue.createApp({
    data() {
        return {
            description: 'Learning Events Binding!',
            name: '',
            anotherName: ''
        }
    },
    methods: {
        showAlert() {
            alert(this.description)
        },
        changeOutput(e) {
           this.name = e.target.value 
        },
        changeAnotherNameOutput(e) {
            this.anotherName = e.target.value
        }
    }
})
app.mount('#assignment')