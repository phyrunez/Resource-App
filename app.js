const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        addUp(num) {
            this.counter = this.counter + num
        },
        reduce(num) {
            this.counter = this.counter - num
        } 
    }
});

app.mount('#events');
