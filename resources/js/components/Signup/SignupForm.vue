<template>
    <form @submit.prevent="submit">
        <div class="container" >
            <br>
            <div class="form-group">
                <label class="control-label col-xs-3" >Name</label>
                <div class="col-xs-7">
                    <input v-model="name" class="form-control" placeholder="Enter name" style="width: 40%" autofocus="autofocus" />
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-xs-3">Password</label>
                <div class="col-xs-7">
                    <input v-model="password" class="form-control" placeholder="Enter Password" style="width: 40%"/><br>
                </div>
            </div>
            <button type="submit"class="btn btn-primary">Login</button>
        </div>
    </form>

</template>
import Form from '@/core/FormHandler/Form';

<script>
    export default {
        data () {
            return {
                name: '',
                password: ''

            };
        },
        methods: {
            submit () {
                axios.post('/api/endpoint-name',{
                    name:this.name,
                    password:this.password
                })
                .then(() => {})
                .catch(() => {})
            },
        }
    };

</script>
