<template>
    <div>
        <li v-for="res in resourceData" :key="res">
            <section>
                <div>
                    <li><span class="title">{{ res.title }}</span></li>
                    <li>{{ res.description }}</li>
                    <li><a :href="res.link">View Resource</a></li>
                </div>
                <button @click="deleteResource(res.id)">Delete</button>
            </section>
        </li>
    </div>
</template>

<script>
export default {
    inject: ["resourceData", "deleteResource"]
}
</script>

<style scoped>
    section {
        background: white;
        width: 80%;
        margin: auto;
        margin-top: 20px;
        height: 100%;
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2)
    }
    section li { padding: 10px 0 10px 10px; }
    section button {
        height: 40%;
        width: 5rem;
        background: red;
        border: red;
        float: right;
        color: white;
        padding: 10px 0;
        margin: 10px 10px 0 0;
        cursor: pointer;
    }
    li {
        list-style-type: none;
    }
    a {
        text-decoration: none;
        color: darkgoldenrod;
    }
    .title {
        font-weight: bold;
        font-size: 20px;
    }
</style>