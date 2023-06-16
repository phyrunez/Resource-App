<template>
    <section>
        <form @submit.prevent="newResource(title, description, this.$refs.url.value)">
            <h2>Create New Resource</h2>
            <div class="input_field">
                <label id="title">Title</label>
                <input class="title" type="text" placeholder="title" v-model="title" />
            </div>
            <div class="input_field">
                <label id="description">Description</label>
                <input class="desc" type="text" placeholder="description" v-model="description" />
            </div>
            <div class="input_field">
                <label id="resource">Resource Link</label>
                <input class="res" type="text" placeholder="url" ref="url" />
            </div>
            <button @keypress.enter="displayModal" @click="displayModal">Submit</button>
        </form>
        <teleport to="body">
            <error-modal v-if="inputIsInvalid">
                <div class="error_modal_body">
                    <h2>All Field are Required</h2>
                    <h5>Please make sure to enter all fields</h5>
                    <button @keypress.enter="removeModal" @click="removeModal" :class="{ 'btn_invalid_color': inputIsInvalid }">Go Back</button>
                </div>
            </error-modal>
            <success-modal v-if="inputIsValid">
                <div class="error_modal_body">
                    <h2>Successfully Added!!! </h2>
                    <h5>Navigate to Shared Resource to see your newly added resource</h5>
                    <button @keypress.enter="removeModal" @click="removeModal" :class="{ 'btn_valid_color': inputIsInvalid = true }">Go Back</button>
                </div>
            </success-modal>
        </teleport>
    </section>
</template>

<script>
import ErrorModal from "../ErrorModal.vue"
import SuccessModal from "../SuccessModal.vue"

export default {
    components: {
        "error-modal": ErrorModal,
        "success-modal": SuccessModal
    },
    emits: ["new-res"],
    inject: ["newResource"],
    data() {
        return {
            inputIsInvalid: false,
            inputIsValid: false,
            title: "",
            description: "",
            url: ""
        }
    },
    methods: {
        displayModal() {
            const enteredTitleVal = this.title
            const enteredDescVal = this.description
            const enteredUrlVal = this.$refs.url.value
            if(enteredTitleVal === "" || enteredDescVal === "" || enteredUrlVal === "") {
                this.inputIsInvalid = true
            }else {
                this.inputIsValid = true
            }
        },
        removeModal() {
            this.inputIsInvalid = false
            this.inputIsValid = false
        }
    },
   
}
</script>

<style scoped>
    form {
        height: 100%;
        text-align: center; 
        padding: 20px 0;
        margin-top: 20px;
    }
    
    form button {
        height: 40%;
        width: 5rem;
        background: lightgreen;
        border: lightgreen;
        padding: 10px 0;
        cursor: pointer;
    }
    .input_field {
        margin: 30px auto;
        padding: 0 20px;
        width: 85%;
        text-align: center;
    }

    .input_field #title,
    .input_field #description, 
    .input_field #resource {
        font-weight: bold;
        margin-right: 20px;
    }
    .input_field .title {
        padding: 10px;
        margin-left: 98px;
        outline: none;
        width: 20rem;
    }
    .input_field .desc {
        padding: 10px;
        margin-left: 50px;
        outline: none;
        width: 20rem;
    }
    .input_field .res  {
        padding: 10px;
        margin-left: 30px;
        outline: none;
        width: 20rem;
    }
    .error_modal_body {
        background-color: #fefefe;
        margin: 15% auto; 
        padding: 20px;
        border: 1px solid #888;
        width: 60%;
        height: 9rem;
    }
    .error_modal_body button {
        width: 5rem;
        padding: 10px 0;
        cursor: pointer;
        float: right;
    }
    .btn_invalid_color {
        background: coral;
        border: coral;
    }
    .btn_valid_color {
        background: lightgreen;
        border: lightgreen;
    }
</style>