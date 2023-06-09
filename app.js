const app = Vue.createApp({
    data() {
        return {
            friendsList: [
                { name: 'Manuel Lorenz', phone: '09023187770', email: 'manuel@localhost.com' },
                { name: 'Julie Jones', phone: '0993002900', email: 'julie@localhost.com' }
            ],
            showDetails: false
        }
    },
    
})

app.component('friend-contact', {
    template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="showFriendDetails">Show Details</button>
          <ul v-if="showDetails">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
    `,
    data() {
        return {
            showDetails: false,
            friend: { 
                id: 1,
                name: 'Manuel Lorenz', 
                phone: '09023187770', 
                email: 'manuel@localhost.com' 
            }
        }
    },
    methods: {
        showFriendDetails() {
            this.showDetails = !this.showDetails
        }
    }
})

app.mount('#app')