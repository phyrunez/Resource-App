const app = Vue.createApp({
    data() {
        return {
            result: 0,
        }
    },
    watch: {
        result(value) {
            if(value > 0) {
                setTimeout(function(){
                    value = 0
                    console.log(value)
                }, 5000)
            }
        }
    },
    computed: {
        displayMessage() {
            if(this.result <= 37) return 'Not there yet'
            if(this.result > 37) return 'Too Much!'
        }
    },
    methods: {
        addUp(num) {
            this.result = this.result + num
            console.log(this.result)
        }
    }
})
app.mount('#assignment')