const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmName: ''
        };
    },
    methods: {
        submitForm() {
            alert('Submitted!')
        },
        setName(e, lastName) {
            this.name = `${e.target.value} ${lastName}`
            // this.name = e.target.value + ' ' + lastName
        },
        confirmedName() {
            this.confirmName = this.name
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
