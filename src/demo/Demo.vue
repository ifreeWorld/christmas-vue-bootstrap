<template>
    <div>
        <input v-model="msg" placeholder="edit me">
        <p>{{ msg }}</p>
    </div>
</template>
<script>
    export default {
        name: "Demo",
        data: function () {
            return {
                msg: 1
            };
        }
    };
</script>
