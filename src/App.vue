<template>
    <div>
        <user-data
            @update-user-data="updateUserData"
        ></user-data>
        <active-user
            :userDataObj="userDataObj"
        ></active-user>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userDataObj: { name: "Jude", age: 24 }
        }
    },
    methods: {
        updateUserData(name, age) {
            this.userDataObj = {
                name: name,
                age: age
            }
            console.log(this.userDataObj)
        }
    }
}
</script>