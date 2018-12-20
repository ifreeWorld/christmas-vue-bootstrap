<template>
    <div class="modal fade" id="turnTable_modal" tabindex="-1" role="dialog" style="display: none;">
        <div style="width:100%;height:100%">
            <section id="turntable" class="gb-turntable">
                <div class="gb-turntable-container">
                    <canvas class="gb-turntable-canvas" width="300" height="300px">抱歉！浏览器不支持。</canvas>
                </div>

                <a v-on:click="draw" class="gb-turntable-btn" href="javascript:;">抽奖</a>
                <button v-on:click="click" type="button" class="close turnTable-close" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </section>
        </div>
    </div>
</template>
<script>
    export default {
        name: "TurnTable",
        data: function() {
            return {
                drawing: false
            };
        },
        methods: {
            draw: function() {
                this.drawing = true;
            },
            click: function() {
                if (!this.drawing) {
                    $('#turnTable_modal').modal('hide');
                }
            },
            reset: function() {
                this.drawing = false;
            }
        }
    };
</script>

