const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        };
    },
    methods: {
        setName(e, lastName) {
            this.name = `${e.target.value} ${lastName}`
            // this.name = e.target.value + ' ' + lastName
        },
        addUp(num) {
            this.counter = this.counter + num
        },
        reduce(num) {
            this.counter = this.counter - num
        } 
    }
});

app.mount('#events');
