import Parallax from 'parallax-js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/media-query.css';
import 'jquery-countdown';
import App from './App.vue';
import {
    setParallaxHeight,
    setElementsHeight
} from './event';

Vue.config.productionTip = false;

const app = new Vue({
    render: h => h(App),
});
app.$mount('#app');

const scene = document.getElementById('christmas_scene');
var parallaxInstance = new Parallax(scene, {
    scalarX: 5,
    scalarY: 15,
    invertY: false
});

$(window).on('load', function(){
	setParallaxHeight();
	setElementsHeight();
});

$(window).on('resize', function(){
	setParallaxHeight();
	setElementsHeight();
});

$('#countdown_container').countdown('2018/12/25', function(event) {
    $(this).html(event.strftime('<div class="col-md-3 col-xs-3 countdown-globe">%D<div class="col-md-12 padding-none">Days</div></div>\
        <div class="col-md-3 col-xs-3 countdown-globe">%H<div class="col-md-12 padding-none">Hours</div></div>\
        <div class="col-md-3 col-xs-3 countdown-globe">%M<div class="col-md-12 padding-none">Minutes</div></div>\
        <div class="col-md-3 col-xs-3 countdown-globe">%S<div class="col-md-12 padding-none">Seconds</div></div>'));
});