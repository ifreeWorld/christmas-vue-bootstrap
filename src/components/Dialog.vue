<template>
    <div class="modal fade" id="contact_modal" tabindex="-1" role="dialog" style="display: none;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="col-md-12 mail-container">
                        <div class="col-md-12 padding-none bg-color">
                            <div class="col-md-12 text-center">It's Christmas!</div>
                            <div class="col-md-12 text-center">Tell me what gift you want!</div>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <form class="col-md-12 padding-none" onsubmit="return false;">
                                <div class="col-md-6 col-xs-12">
                                    <div class="col-md-12 padding-none">
                                        <input v-model="name" type="text" class="mail-name" id="form_first_name" placeholder="姓名">
                                    </div>
                                    <div class="col-md-12 padding-none">
                                        <input v-model="email" type="text" class="mail-email" id="form_valid_email" placeholder="邮箱">
                                    </div>
                                    <div class="col-md-12 padding-none">
                                        <input v-model="phone" type="text" class="mail-phone" id="form_valid_phone" placeholder="手机号">
                                    </div>
                                    <div class="col-md-12 padding-none">
                                        <input v-model="gift" class="mail-gift" id="form_gift" placeholder="礼物">
                                    </div>
                                </div>
                                <div class="col-md-6 col-xs-12 text-right">
                                    <img src="../images/form-image.png" alt="form-pattern-image">
                                    <button v-on:click="send" data-dismiss="modal" class="btn form-submit-button" type="submit" id="submit_form_btn">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-12 padding-none mail-container hidden">
                        <div class="col-md-12 padding-none bg-color thank-you-msg text-large" id="form_success_msg"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Dialog",
        data: function() {
            return {
                name: "",
                email: "",
                phone: "",
                gift: ""
            };
        },
        methods: {
            send: function() {
                if (this.check()) {
                    alert("您的信息未填写完整...");
                } else {
                    alert("您的礼物正在路上~~~");
                }
                this.reset();
            },
            check: function() {
                if (
                    this.name === "" ||
                    this.email === "" ||
                    this.phone === "" ||
                    this.gift === ""
                ) {
                    return true;
                }
                return false;
            },
            reset: function() {
                this.name = '';
                this.email = '';
                this.phone = '';
                this.gift = '';
            }
        }
    };
</script>

