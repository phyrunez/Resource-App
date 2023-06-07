const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullname() {
        console.log('Running everytime again')
        if(this.name === '') return ''
        return this.name + ' ' + 'Eze'
    }
  },
  methods: {
    outputFullname(lastName) {
        console.log('Running everytime')
        if(this.name === '') return ''
        return this.name + " " + lastName
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
        this.name = ''
    }
  }
});

app.mount('#events');
