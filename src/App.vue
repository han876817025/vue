<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" @click="fn">
        <HelloWorld style="border: solid 1px red" :msg="message" :fn="fn" @fs="$event()"   />
        {{s}}
        <ul>
            <li v-for="(item,index) in arr">{{index}}-----{{item}}</li>
        </ul>
        <div v-for="item in obj">
            <span>{{item}}</span>
        </div>
        <button @click="fn">有种你点死我</button>
        <router-link to="/home" >你来啊</router-link>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

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
            //增加变量
            ...mapState({
                aa: state => state.Cat //注意这些与上面的区别就是state.footerStatus,
            }),
            ...mapGetters("Cat", {
                is: 'isAdmin' //注意这些与上面的区别就是state.footerStatus,
            }),
            s() {
                // alert(this.message + "computed")
            },
        },
        //操作dom
        mounted() {
            //获取值
            const {aa} = this;
            console.log(aa, aa.actionStus)
        },
        methods: {
            //action
            ...mapActions("Cat", ["login"]),
            fn() {
                // //添加属性
                // this.$set(this.obj, "b", a++)
                //触发action中的发法
                 //1, this.login()
                 //2, this.$store.dispatch('Cat/actionStus');
                 // const {aa} = this;
                console.log(aa.actionStus)
            },
            ff() {
                alert(100);
                console.log("10");
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
