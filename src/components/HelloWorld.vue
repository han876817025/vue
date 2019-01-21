<template>
    <div class="hello">
        {{this.msg}}
        <button @click="this.fn" >点我啊</button>
        <button @click="$emit('fs',fm)">点我呵呵</button>
    </div>

</template>
<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: Number,
            fn: Function
        },
        methods: {
            fm(){
                alert("呵呵")
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
