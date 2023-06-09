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
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

const data = {
    message: 'Hello!',
    logMessages: 'Hello! World!'
};

const handler = {
    set(target, key, value) {
        console.log(target)  //displays the data object
        console.log(key)  //displays the key of the object == message
        console.log(value)  //displays what we set as the value of the key property  => name = 'anything'

        if(key === 'message') target.logMessages = value + ' World!'
        target.message = value
    }
}

const proxy = new Proxy(data, handler);
proxy.message = 'Helloo!!!!!'
console.log(proxy.logMessages)