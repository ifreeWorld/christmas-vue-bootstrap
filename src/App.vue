<template>
    <div id="app">
        <div id="container" class="parallax-container snow">
            <Scene></Scene>
            <Timer></Timer>
            <Title></Title>
            <Contact v-on:watchChild="showDialog"></Contact>
            <Tree></Tree>
            <Dialog v-bind:isShow="isShow"></Dialog>
        </div>
    </div>
</template>
<script>
    import Scene from './components/Scene.vue';
    import Timer from './components/Timer.vue';
    import Title from './components/Title.vue';
    import Contact from './components/Contact.vue';
    import Tree from './components/Tree.vue';
    import Dialog from './components/Dialog.vue';
    export default {
        name: 'app',
        data: function() {
            return {
                isShow: false
            };
        },
        components: {
            Scene,
            Timer,
            Title,
            Contact,
            Tree,
            Dialog
        },
        methods: {
            showDialog: function() {
                this.isShow = true;
            }
        }
    };
</script>
<style>
</style>