<template lang="">
    <div class="system-message-button">
        <div class="system-message-left-box"></div>
        {{name}}
    </div>
</template>
<script>
export default {
	props: ['name']
}
</script>
<style lang="sass" scoped>
    @import '@/styles/colors.sass'

  .system-message-button
    display: flex
    justify-content: flex-start
    align-items: center
    flex-direction: row
    background: linear-gradient(to right, rgba(71,68,60,1) 50%, rgba(158,153,134,1) 50%)
    background-size: 200% 100%
    background-position: right bottom
    min-width: 110px
    width: auto
    padding: 5px 5px
    height: 28px
    cursor: pointer
    transition: background .3s ease-out, color .3s ease-in-out
    box-shadow: 2px 2px 0 rgba(71, 68, 60, 0.5)

    .system-message-left-box
        background-color: $brown-color
        width: 15px
        height: 15px
        padding: 2px
        margin-right: 5px
        transition: background 0.3s ease-out
        display: flex
        justify-content: center
        align-items: center

    &::before
        content: ''
        display: block
        position: absolute
        margin-left: -40px
        width: 40px
        height: 20px
        opacity: 0
        transition: background .3s, opacity .5s ease-in-out

    &:hover::before
        background: url("@/assets/pointer.svg") no-repeat
        background-size: contain
        opacity: 1

    &:hover
        background-position: left bottom
        color: $light-color

        .system-message-left-box
            background-color: $light-color

</style>