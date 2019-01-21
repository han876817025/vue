<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" @click="fn">
        <HelloWorld style="border: solid 1px red" :msg="message" :fn="fn"  @fs="$event()"  />
        {{s}}
        <ul>
            <li v-for="(item,index) in arr">{{index}}-----{{item}}</li>
        </ul>
        <div v-for="item in obj">
            <span>{{item}}</span>
        </div>
        <button ></button>

    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    let a = 0;
    export default {
        name: 'app',
        data() {
            return {
                message: 0,
                arr: [1, 23, 4],
                obj: {}
            }
        },
        components: {
            HelloWorld
        },
        computed: {
            s() {
                // alert(this.message + "computed")
            },

        },
        methods: {
            fn() {
                this.$set(this.obj, "b", a++)
            },
            ff(e){
                console.log(e);
                alert(100)
            }
        },
        watch: {
            message: () => {
                alert("watch")
            }
        }

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
