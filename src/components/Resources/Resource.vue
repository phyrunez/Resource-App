<template>
    <div class="resource_page">
        <section>
            <button :class="isActiveApply" @click="setResource('show-resource')">Shared Resource</button>
            <button :class="isActiveApplyisAdd" @click="setResource('add-resource')">Add Resources</button>
        </section>
        
        <component :is="showResource"></component>
    </div>
</template>

<script>
import ShowResource from "./ShowResource.vue"
import AddResource from "./AddResource.vue"

export default {
    components: {
        "show-resource": ShowResource,
        "add-resource": AddResource
    },
    data() {
        return {
            showResource: "show-resource",
            isActive: true
        }
    },
    methods: {
        setResource(res) {
            this.showResource = res
        }
    },
    computed: {
        isActiveApply() {
            return {
                active : this.isActive && this.showResource === "show-resource"
            }
        },
        isActiveApplyisAdd() {
            return {
                active : this.isActive && this.showResource === "add-resource"
            }
        }
    }
    
}
</script>

<style scoped>
    .resource_page {
        margin-top: 20px;
    }
    section {
        background: white;
        width: 80%;
        margin: auto;
        height: 100%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2)
    }
    button {
        padding: 10px;
        margin: 5px;
        border: none;
        cursor: pointer;
    }
    .active { 
        background:coral;
        color: white
    }
</style>