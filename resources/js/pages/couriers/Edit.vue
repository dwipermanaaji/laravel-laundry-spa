<template>
    <div class="col-md-12">
        <div class="panel">
            <div class="panel-heading">
                <h3 class="panel-title">Edit Courier</h3>
            </div>
            <div class="panel-body">
                <app-courier-form ref="courierForm"></app-courier-form>
                <div class="form-group">
                    <button class="btn btn-primary btn-sm btn-flat" @click.prevent="submit">
                        <i class="fa fa-save"></i> Update
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState, mapActions } from "vuex";
    import FormCorier from './Form.vue';
    export default {
        name:'EditCourier',
        methods: {
            submit(){
                this.$refs.courierForm.submit();
            }
        },
        components:{
            appCourierForm:FormCorier
        }
    }
</script>