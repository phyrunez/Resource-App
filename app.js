const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
    //   this.message = this.currentUserInput;
        this.message = this.$refs.userInput.value
        console.dir(this.$refs.userInput)
        console.log(typeof(this.$refs.userInput))
    },
  },
});

app.mount('#app');

const app2 = Vue.createApp({
  template: `
    <p>{{ favouriteMeal }}</p>
  `,
  data() {
    return {
      favouriteMeal: 'Rice'
    };
  },
  methods: {
    
  },
});

app2.mount('#app2');
