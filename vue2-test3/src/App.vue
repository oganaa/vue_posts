<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixin</h1>
        <p>{{text | toUpperCase}}</p>
        <p>{{text | toLowerCase}}</p>
        <hr>
        <button @click="friuts.push('bee')">add friut</button>
        <input type="text" v-model="filterText">
        <ul>
              <li v-for="(friut,index) in filteredFriuts" :key="index">
                {{friut}}
            </li>   
        </ul>
        <app-list></app-list>
    </div>
  </div>
</template>

<script>
import List from './List'
import {fruitMixin} from './friutMixin'
export default {
    components:{
        appList:List
    },
    mixins:[fruitMixin],
    data(){
        return{
            text:'Filter test',
        }
    },
    filters:{
        toUpperCase(value){
            return value.toUpperCase();
        }
    },
}
</script>

<style></style>
