Vue.createApp({
    data() {
        return {
            goals: [],
            enteredVal: ''
        }
    },
    methods: {
        addGoals() {
            this.goals.push(this.enteredVal)
            this.enteredVal = ''
        }
    }
}).mount('#app')

// const btnEl = document.querySelector('#btn_add-goal')
// const inputEl = document.querySelector('#goal')
// const unorderedListEl = document.querySelector('#list')

// btnEl.addEventListener('click', () => {
//     const inputElValue = inputEl.value
//     const listEl = document.createElement('li')
//     listEl.textContent = inputElValue
//     unorderedListEl.appendChild(listEl)
//     console.log(listEl)
//     inputEl.value = ''
// })

