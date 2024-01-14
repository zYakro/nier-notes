<template lang="">
    <div class="input-container">
        <p class="input-name">{{name}}</p>
        <div class="input-elements">
            <div class="left-box"></div>
            <input class="input" type="text" v-model="inputValue" />
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            inputValue: ''
        }
    },
    watch: {
        inputValue(){
            this.$emit('updateInputValue', this.inputValue)
        }
    },
    props: ['name']
}
</script>
<style lang="sass" scoped>
    @import '@/styles/inputs/inputs.sass'

    .input-container 
        @include input-container
</style>