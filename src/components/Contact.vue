<template>
    <div v-on:click="transform" id="mail_pole" style="margin-left: -177.5px;">
        <img src="../images/pole.png" class="img-responsive" alt="mail-pole" data-toggle="modal" data-target="#contact_modal">
    </div>
</template>
<script>
export default {
    name: 'Contact',
    methods: {
        transform: function() {
            this.$emit('watchChild');
        }
    }
}
</script>

