<template lang="">
    <SystemMessage v-if="display" :message="message">
        <SystemMessageButton name="Yes" @click="yesFunction" /> 
        <SystemMessageButton name="No" @click="noFunction" /> 
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
            message: '',
            yesFunction: () => {},
            noFunction: () => {},
        }
    },
    methods: {
        displayOff(){
            this.display = false
        },
        displayOn(message){
            this.message = message
            this.display = true
        },
        updateFunctions(yesFunction, noFunction){
          this.yesFunction = yesFunction
          this.noFunction = noFunction
        }
    }
}
</script>
<style lang="">
    
</style>