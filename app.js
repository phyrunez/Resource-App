const app = Vue.createApp({
  data() {
    return { 
        goal: '',
        goals: []
    };
  },
  methods: {
    addGoal() {
        this.goals.push(this.goal)
        console.log(this.goals)
    },
    removeGoal(i) {
        this.goals.splice(i, 1)
        console.log(this.goals)
    }
  }
});

app.mount('#user-goals');
