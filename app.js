const app = Vue.createApp({
    data() {
        return {
            result: 0,
        }
    },
    watch: {
        result(value) {
            if(value++) {
                setTimeout(() => {
                    value = 0
                }, 5000)
            }
            console.log(value)
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