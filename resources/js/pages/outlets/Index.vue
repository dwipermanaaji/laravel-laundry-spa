<template>
    <div class="container">
        <section class="content-header">
            <h1>Manage Outlets</h1>
            <app-breadcrumb></app-breadcrumb>
        </section>
        <section class="content">
            <div class="row">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>
<script>
    import Breadcrumb from '../../components/Breadcrumb.vue';
    export default {
        name:'IndexOutlet',
        components:{
            appBreadcrumb:Breadcrumb
        }
    }
</script>