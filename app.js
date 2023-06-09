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
    beforeCreate() {
        alert('Before Create!!')
    },
    created() {
        alert('Created!!')
    },
    beforeMount() {
        alert('Before Mount!!')
    },
    mounted() {
        alert('Mounted!!')
    },
    beforeUpdate() {
        alert('Before Update!!')
    },
    updated() {
        alert('Updated!!')
    },
    beforeUnmount() {
        alert('Before Unmount!!')
    },
    unmounted() {
        alert('Unmounted!!')
    },
});

app.mount('#app');

