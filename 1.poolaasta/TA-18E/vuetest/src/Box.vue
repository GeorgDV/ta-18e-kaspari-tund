<template>
    <div>
        <h1>
            <i>{{message}}</i>
        </h1>
    </div>
</template>


<script>
    export default {
        props: ["message"],
        data() {
            return {
                message: "Hello Data Component..",
                isOpen: false
            }
        }
    }
</script>


<style scoped>

</style>