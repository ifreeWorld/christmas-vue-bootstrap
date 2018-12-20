<template>
    <div id="app">
        <div id="container" class="parallax-container snow">
            <Scene></Scene>
            <Timer></Timer>
            <Title></Title>
            <Contact v-on:watchChild="showDialog"></Contact>
            <Tree></Tree>
            <Gift v-on:watchTurnChild="showTurnTable"></Gift>
            <Audio></Audio>
            <Dialog v-bind:isShow="isShow"></Dialog>
            <TurnTable ref="turnTable" v-bind:turnIsShow="turnIsShow"></TurnTable>
        </div>
    </div>
</template>
<script>
    import Scene from "./components/Scene.vue";
    import Timer from "./components/Timer.vue";
    import Title from "./components/Title.vue";
    import Contact from "./components/Contact.vue";
    import Tree from "./components/Tree.vue";
    import Dialog from "./components/Dialog.vue";
    import Gift from "./components/Gift.vue";
    import Audio from "./components/Audio.vue";
    import TurnTable from "./components/TurnTable.vue";
    import daike from "./images/turn/daike.png";
    import cherry from "./images/turn/cherry.png";
    import iphone from "./images/turn/iphone.png";
    import ysld from "./images/turn/ysld.png";
    import gucci from "./images/turn/gucci.png";
    export default {
        name: "app",
        data: function() {
            return {
                isShow: false,
                turnIsShow: false,
                turnIsInit: false
            };
        },
        components: {
            Scene,
            Timer,
            Title,
            Contact,
            Tree,
            Dialog,
            Gift,
            Audio,
            TurnTable
        },
        methods: {
            showDialog: function() {
                this.isShow = true;
            },
            showTurnTable: function() {
                var that = this;
                this.turnIsShow = true;
                if (!this.turnIsInit) {
                    gbTurntable.init({
                        id: "turntable",
                        config: function(callback) {
                            // 获取奖品信息
                            // 奖项 text 属性不能为空，用于显示或抽中奖品提示
                            // img 为奖品图片地址，如果不为空则转盘奖品按图片方式显示
                            callback &&
                                callback([
                                    { text: "黛珂保湿美容液", img: daike },
                                    { text: "iphonexs max 256G", img: iphone },
                                    { text: "雅诗兰黛口红(任选一支)", img: ysld },
                                    { text: "cherry MX8.0机械键盘", img: cherry },
                                    { text: "GUCCI 女包(任选一款)", img: gucci },
                                    { text: "100元红包" }
                                ]);
                        },
                        getPrize: function(callback) {
                            // 获取中奖信息
                            var num = (Math.random() * 6) >>> 0, //奖品ID
                                chances = num; // 可抽奖次数
                            callback && callback([num, chances]);
                        },
                        gotBack: function(data) {
                            that.$refs.turnTable.reset();
                            alert("恭喜抽中" + data);
                        }
                    });
                }
                this.turnIsInit = true;
            }
        }
    };
</script>
<style>
</style>