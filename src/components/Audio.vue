
<template>
    <div>
        <audio id="audio" src="http://wangzilong-1256848957.cos.ap-guangzhou.myqcloud.com/Merry-Christmas.mp3" loop="loop">
        </audio>
        <img v-on:click="click" v-bind:class="{ play: isPlayed, pause: !isPlayed }" src="../images/music_icon.png" alt="christmas-music" id="christmas_music">
    </div>
</template>
<script>
    export default {
        name: "Audio",
        data: function() {
            return {
                isPlayed: false
            };
        },
        methods: {
            click: function() {
                var audio = document.getElementById("audio");
                if (audio.paused) {
                    audio.play();
                    this.isPlayed = true;
                } else {
                    audio.pause();
                    this.isPlayed = false;
                }
            }
        }
    };
</script>

