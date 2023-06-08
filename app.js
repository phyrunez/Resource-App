const app = Vue.createApp({
  data() {
    return { 
        goal: '',
        goals: [],
        dummyObj: { name: 'Jude', age: 24 } 
    };
  },
  methods: {
    addGoal() {
        this.goals.push(this.goal)
        console.log(this.goals)
    }
  }
});

app.mount('#user-goals');
