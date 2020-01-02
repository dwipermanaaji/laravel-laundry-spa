export default{
    methods:{
        $can(permissionName){
            let permission = this.$store.state.user.authenticated.permission
            if(typeof permission != 'undefined'){
                return permission.indexOf(permissionName) !== -1 
            }
        }
    }
}