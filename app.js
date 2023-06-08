const app = Vue.createApp({
    data() {
        return {
            task: '',
            tasks: [],
            state: true,
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.task)
            console.log(this.tasks)
        },
        showTasks() {
            this.state = !this.state
            console.log(this.state)
        },
        removeTask(ind) {
            this.tasks.splice(ind, 1)
        }
    }
})
app.mount('#assignment')