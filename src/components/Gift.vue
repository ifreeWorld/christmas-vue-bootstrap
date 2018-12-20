
<template>
    <img v-on:click="showTurnTable" src="../images/gift1.png" alt="christmas-gift" id="christmas_gift" data-toggle="modal" data-target="#turnTable_modal">
</template>
<script>
    export default {
        name: "Gift",
        methods: {
            showTurnTable: function() {
                this.$emit('watchTurnChild');
            }
        }
    };
</script>

