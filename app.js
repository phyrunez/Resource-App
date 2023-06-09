const getRandomAttackVal = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        }
    },

    watch: {
        playerHealth(value) {
            if(value <= 0 && this.monsterHealth <= 0) this.winner = 'draw'
            else if(value <= 0) this.winner = 'monster'
        },
        monsterHealth(value) {
            if(value <= 0 && this.playerHealth <= 0) this.winner = 'draw'
            else if(value <= 0) this.winner = 'player'
        }
    },

    computed: {
        monsterHealthWidth() { 
            if(this.monsterHealth < 0) return { width: '0%' }
            return { width: this.monsterHealth + '%' } 
        },
        playerHealthWidth() { 
            if(this.playerHealth < 0) return { width: '0%' }
            return { width: this.playerHealth + '%' } 
        },

        mayUseSpecialAttack() { return this.currentRound % 3 !== 0 }
    },
    
    methods: {
       surrender() {
            this.winner = 'monster'
       },
       restartGame() {
            this.monsterHealth = 100
            this.playerHealth = 100
            this.winner = null
            this.currentRound = 0
            this.logMessages = []
       },
       attackMonster() {
            this.currentRound++
            const attackVal = getRandomAttackVal(5, 12)
            this.monsterHealth -= attackVal
            this.attackPlayer()
            this.handleLogMessages('player', 'attack', attackVal)
       },
       attackPlayer() {
            const attackVal = getRandomAttackVal(8, 12)
            this.playerHealth -= attackVal
            this.handleLogMessages('monster', 'attack', attackVal)
       },
       specialAttack() {
            this.currentRound++
            const attackVal = getRandomAttackVal(10, 25)
            this.monsterHealth -= attackVal
            this.handleLogMessages('player', 'attack', attackVal)
       },
       playerHeals() {
            this.currentRound++
            const healVal = getRandomAttackVal(8, 20)
            if(this.playerHealth + healVal > 100) this.playerHealth = 100;
            else this.playerHealth += healVal;
            this.attackPlayer()
            this.handleLogMessages('player', 'heal', healVal)
       },
       handleLogMessages(who, what, value) {
        this.logMessages.unshift({
            actionBy: who, 
            actionType: what, 
            actionValue: value
        })
        console.log(this.logMessages)
       }
    }
})
app.mount('#game')