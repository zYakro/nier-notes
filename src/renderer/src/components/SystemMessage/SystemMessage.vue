<template lang="">
    <div v-if="display" class="system-message-container">
        <div class="system-message">
            <p class="system-message-title">
                <span class="left-title-box"></span>
                SYSTEM MESSAGE
            </p>
            <div class="system-message-sections">
                <p class="system-message-message">{{message}}</p> 
                <div class="system-message-options">
                    <slot></slot>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    props: ['message'],
    data(){
        return{
            display: true
        }
    },
    methods: {
        displayOff(){
            this.display = false
        },
        displayOn(){
            this.display = true
        }
    }
}
</script>
<style scoped lang="sass">
    @import '@/styles/colors.sass'

    .system-message-container
        width: 100%
        height: 100%
        position: absolute
        top: 0
        left: 0
        display: flex
        align-items: center
        justify-content: center
        background-color: rgba(0, 0, 0, 0.2)
        z-index: 999

        .system-message
            width: 100%
            max-width: 400px
            height: 200px

            .system-message-title
                width: 100%
                height: 30px
                background-color: $brown-section-color
                color: $light-color
                display: flex
                justify-content: flex-start
                align-items: center
                padding: 2px
                letter-spacing: 3px

                .left-title-box
                    width: 15px
                    height: 15px
                    background-color: $light-section-color
                    margin: 0 10px

            .system-message-sections
                width: 100%
                min-height: 150px
                height: calc(100% - 30px)
                background-color: $light-section-color
                padding: 0 5px
                display: flex
                justify-content: flex-start
                flex-direction: column
                align-items: flex-start
                .system-message-message
                    width: 100%
                    height: 100%
                    display: flex
                    justify-content: center
                    align-items: center
                    padding: 5px 10px


                .system-message-options
                    display: flex
                    justify-content: space-evenly
                    align-items: center
                    width: 100%
                    height: auto
                    padding: 20px
                    align-self: flex-end
                    border-top: 1px solid $light-lines-color
</style>