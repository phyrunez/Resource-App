const app = Vue.createApp({
    data() {
        return {
            startedVue: 'started learning Vue',
            masteredVue: 'mastered learning Vue',
            message: '<span>Hello World</span>',
            vueLink: 'https://vuejs.org'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random()
            if(randomNumber < 0.5) return this.startedVue
            else return this.masteredVue
        }
    }
})
app.mount('#user-goal')

