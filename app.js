const app = Vue.createApp({
    data() {
        return {
            displayData: { name: 'Jude Eze', age: 20 },
            imgUrl: 'https://picsum.photos/id/237/200/300'
        }
    },
    methods: {
        displayNumber() {
            return Math.random()
        }
    }
})

app.mount('#assignment')