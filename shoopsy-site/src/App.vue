<template>
<navigation />
<router-view></router-view>

<appfooter />

</template>

<script>
import navigation from './components/View/Header&Footer/Header.vue';
import appfooter from './components/View/Header&Footer/Footer.vue';
export default {
    name: 'App',
    components: {
        navigation,
        appfooter
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
