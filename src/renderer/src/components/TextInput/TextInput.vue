<template lang="">
    <div class="input-container">
        <p class="input-name">{{name}}</p>
        <div class="input-elements">
            <div class="left-box"></div>
            <input class="input" type="text" v-model="value" @input="updateInputValue" />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: this.inputValue
        }
    },
    methods: {
        updateInputValue() {
            this.$emit('updateInputValue', this.value)
        }
    },
    props: ['name', 'inputValue']
}
</script>
<style lang="sass" scoped>
@import '@/styles/colors.sass'

$left-box-width: 15px
$left-box-margin-right: 25px

.input-container
  width: 90%
  max-width: 300px
  height: 100%

.input-name
    display: flex
    align-items: center
    justify-content: flex-start
    text-transform: capitalize

.input-elements
    display: flex
    justify-content: flex-start
    align-items: center
    flex-direction: row
    height: 100%
    width: 100%

.input
    width: calc(100% - $left-box-width - $left-box-margin-right)
    height: 100%
    outline: none
    border: none
    background-color: $light-lines-color
    box-shadow: 2px 2px 0 rgba(71, 68, 60, 0.50)
    padding: 5px 0
    padding-left: 8px
    color: $brown-color

.left-box
    width: $left-box-width
    height: 100%
    margin-right: 12px
    border-left: 8px solid $light-lines-color
    border-right: 2px solid $light-lines-color
    display: flex
    justify-content: center
    align-items: center
    margin-right: $left-box-margin-right

    &::before
        content: ''
        display: block
        position: absolute
        margin-left: 25px
        width: 30px
        height: 16px
        background: url("@/assets/pointer.svg") no-repeat
        background-size: contain

.right-extension
    margin-left: 5px
    letter-spacing: 1px
    height: 100%
    display: flex
    justify-content: center
    align-items: center

</style>