<template>
       <div >
   
        <hr>
        <input type="text" v-model="filterText">
        <ul>
              <li v-for="(friut,index) in filteredFriuts" :key="index">
                {{friut}}
            </li>   
        </ul>
    
  </div>
</template>
<script>
import {fruitMixin} from './friutMixin'
export default {
    mixins:[fruitMixin],
    components:{

    },

    methods:{
    }
}
</script>
<style  scoped>

</style>