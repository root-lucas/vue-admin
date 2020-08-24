<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
    </div>
</template>

<script>
import vHead from './Header.vue'
import vSidebar from './Sidebar'
import bus from './bus'
export default {
    name: 'Home',
    data() {
        return {
            tagsList: [],
            collapse: false,
        }
    },
    components: {
        vHead,
        vSidebar,
    },
    created() {
        bus.$on('collapse-content', (msg) => {
            this.collapse = msg
        })
    },
}
</script>

<style>
.content-collapse {
    left: 65px;
}
</style>
