const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      fullname: ''
    };
  },
  watch: {
    name(value) {
        if(value === '') this.fullname = ''
        this.fullname = value + ' ' + this.lastName
    },
    lastName(value) {
        if(value === '') this.name = ''
        this.fullname = this.name + ' ' + value
    }
  },
  computed: {
    // fullname() {
    //     console.log('Running everytime again')
    //     if(this.name === '') return ''
    //     return this.name + ' ' + this.lastName
    // }
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
