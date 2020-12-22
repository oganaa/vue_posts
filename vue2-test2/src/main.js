import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
Vue.directive('high', {
    bind: (el, bind) => {

        var delay = 1000;

        if (bind.modifiers['delayed']) {
            delay = 3000;
        }

        setTimeout(() => {
            if (bind.arg == 'background') {
                el.style.backgroundColor = bind.value;
            } else {
                el.style.color = bind.value;
            }
        }, delay);

    }
})
new Vue({
    render: h => h(App),
}).$mount('#app')