<template>
    <div class="col-md-12">
        <div class="panel">
            <div class="panel-heading">
                <h3 class="panel-title">Add New Outlet</h3>
            </div>
            <div class="panel-body">
                <app-outlet-form></app-outlet-form>
                <div class="form-group">
                    <button class="btn btn-primary btn-sm btn-flat" @click.prevent="submit">
                        <i class="fa fa-save"></i>Add New
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    import formOutlets from './Form.vue';
    export default {
        name:'AddOutlet',
        data(){
            return{

            }
        },
        methods:{
            ...mapActions('outlet',['submitOutlet']),
            submit(){
                this.submitOutlet().then(()=>{
                    this.$router.push({name: 'outlets.data'})
                })
            }
        },
        components:{
            appOutletForm:formOutlets
        }
    }
</script>