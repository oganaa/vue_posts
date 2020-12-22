<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Directives</h1>
      <p v-text="'Text'"></p>
      <p v-html="'<b>some text</b>' "></p>
      <p v-local-high-color>diarictive text</p>
      <p v-local-high-color="'blue'">data text</p>
      <p v-local-high-color:background.delayed="'blue'">argument text</p>
      <p v-local-high-color:background.delayed.blink="'red'">two modifiers text</p>
      <p v-local-high-color:background.delayed.blink="{mainColor:'pink',secondColor:'green',delay:500}">two modifiers text</p>
    </div>
  </div>
</template>

<script>
export default {
    directives:{
        'local-high-color':{
             bind: (el, bind) => {
    var delay = 1000;
    if (bind.modifiers['delayed']) {
        delay = 3000;
    }
    if (bind.modifiers['blink']) {
        let mainColor = bind.value.mainColor;
        let secondColor = bind.value.secondColor;
        let currentColor = mainColor;
             setTimeout(() => {
                setInterval(()=>{
                currentColor == secondColor?currentColor = mainColor : currentColor = secondColor;
                   if (bind.arg == 'background') {

            el.style.backgroundColor =currentColor;
        } else {
            el.style.color = currentColor;
        }
            },bind.value.delay)
    }, delay);

    }else {
        setTimeout(() => {
        if (bind.arg == 'background') {
            el.style.backgroundColor = bind.value.mainColor;
        } else {
            el.style.color = bind.value.mainColor;
        }
    }, delay);
    }



}
        }
    },
    components:{

    },
    data(){

    },

    methods:{

    }
}
</script>

<style></style>
