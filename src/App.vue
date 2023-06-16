<template>
    <div :style="{maxWidth: '100%'}">
        <the-header></the-header>
        <resource></resource>
    </div>
</template>

<script>
import Resource from "./components/Resources/Resource.vue"
import TheHeader from "./components/UI/TheHeader.vue"

export default {
    components: {
        "resource": Resource,
        "the-header": TheHeader
    },
    data() {
        return {
            resourceData: [
                {
                    id: 1,
                    title: "Official Guide",
                    description: "The official Vue.js documentation",
                    link: "https://v2.vuejs.org"
                },
                {
                    id: 2,
                    title: "Google",
                    description: "Learn to google...",
                    link: "https://www.google.com"
                }
            ]
        }
    },
    provide() {
        return {
            resourceData: this.resourceData,
            newResource: this.addedResource,
            deleteResource: this.deleteSpecificResource
        }
    },
    methods: {
        addedResource(title, description, url) {
            if(title !== "" && description !== "" && url !== "") {
                const newData = {
                    id: this.resourceData.length + 1,
                    title: title,
                    description: description,
                    link: url
                }
                console.log(newData.title)
                if(this.resourceData.indexOf(newData.title) === -1) {
                    this.resourceData.push(newData)
                }
                console.log(this.resourceData)
            }
        },
        deleteSpecificResource(resId) {
            const newArray = this.resourceData.findIndex(res => res.id === resId)
            if(newArray >= -1) return this.resourceData.splice(newArray, 1)
            console.log(newArray)
        }
    }
}
</script>