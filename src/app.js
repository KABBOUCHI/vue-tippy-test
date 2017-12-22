import Vue from 'vue';

import VueTippy from 'vue-tippy/src/index.js';

Vue.use(VueTippy,{
    onHidden : () =>{
        alert('onHidden')
    }
})

new Vue({
    el : '#app'
});