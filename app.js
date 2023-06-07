const app = Vue.createApp({
    data() {
        return {
        counter: 0,
        };
    },
    methods: {
        addUp() {
            return this.counter++
        },
        reduce() {
            return this.counter--
        } 
    }
});

app.mount('#events');
