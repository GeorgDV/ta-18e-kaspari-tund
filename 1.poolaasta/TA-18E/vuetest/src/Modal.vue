<template>
    <div class="modal" :class="{'is-active': true}">
    <div class="modal-background" @click="close"></div>
    <div class="modal-content">
        <div class="card">
            <div class="card-content">
                Hello World
            </div>
        </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="close"></button>
    </div>
</template>

<script>
    export default {
        props:["active"],
        methods:{
            close(){
                this.$emit("close");
            }
        }
    }
</script>


<style scoped>

</style>