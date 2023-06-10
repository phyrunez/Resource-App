<template>
    <form>
        <label for="name">Name: </label>
        <input type="text" v-model="newName"><br>
        <label for="name">Phone: </label>
        <input type="tel" v-model="newPhone"><br>
        <label for="name">Email: </label>
        <input type="text" v-model="newEmail"><br>
        <button type="submit" @click.prevent="submitNewFriend">Submit</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            newName: "",
            newPhone: "",
            newEmail: "",
        }
    },
    methods: {
        submitNewFriend() {
            this.$emit("added-contact", 
                this.newName,
                this.newPhone,
                this.newEmail
            )
        }
    }
}
</script>