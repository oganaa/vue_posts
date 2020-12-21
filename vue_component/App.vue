<template>
   <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent='Quote'">
                    Хашилт
                </button>
                <button @click="selectedComponent='Author'">
                    Зохиогч
                </button>
                <button @click="selectedComponent='New'">
                    Шинэ
                </button>

                {{selectedComponent}}
                <hr>
                <keep-alive> 

                <component :is="selectedComponent">
                </component>
                </keep-alive>
                <!-- <quote @click="selectedComponent='New'">
                    <h1 slot = "title">
                        {{qTitle}}
                    </h1>
                    <small >Hello таслал</small>

                </quote> -->
            </div>
        </div>
    </div>
</template>
<script>
    import Quote from './components/Quote';
    import Author from './components/Author';
    import New from './components/New';
    export default {
        data(){
            return {
                selectedComponent:'Quote',
                qTitle:'Гарчиг таслөл.....'
            }
        },
        components: {   
            Quote,
            Author,
            New
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>