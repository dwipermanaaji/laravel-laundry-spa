<template>
    <div class="col-md-12">
        <div class="panel">
            <div class="panel-heading">
                <h3 class="panel-title">Add New product</h3>
            </div>
            <div class="panel-body">
                <app-product-form ref="formProduct"></app-product-form>
                <div class="form-group">
                    <button class="btn btn-primary btn-sm btn-flat" @click.prevent="submit">
                        <i class="fa fa-save"></i> Add New
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState, mapActions, mapMutations } from "vuex";
    import FormProduct from './Form.vue';
    export default {
        name:'AddProduct',
        methods: {
            submit(){
                this.$refs.formProduct.submit()
            }
        },
        components:{
            appProductForm:FormProduct
        }

    }
</script>