<template lang="">
    <SystemMessage v-if="display" :message="message">
        <SystemMessageButton name="OK" @click="displayOff" /> 
    </SystemMessage>
</template>
<script>
import SystemMessage from './SystemMessage.vue';
import SystemMessageButton from './SystemMessageButton.vue';

export default {
    components: {
        SystemMessage,
        SystemMessageButton
    },
    data(){
        return{
            display: false,
            message: ''
        }
    },
    methods: {
        displayOff(){
            this.display = false
        },
        displayOn(message){
            this.message = message
            this.display = true
        }
    }
}
</script>
<style lang="">
    
</style>