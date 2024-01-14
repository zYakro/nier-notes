<template lang="">
    <div class="basic-button-line">
        <div class="basic-button">
            <div class="basic-button-square">
                <i :class="icon" class="basic-icon" />
            </div>
            {{name}}
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: ['name', 'icon']
}
</script>
<style scoped lang="sass">
    @import '../buttons.sass'

    .basic-button
        @include basic-button
        background: linear-gradient(to right, rgba(71,68,60,1) 50%, rgba(158,153,134,0) 50%)
        background-size: 200% 100%
        background-position: right bottom
        min-width: 100%
        width: 100%
        transition: background .3s ease-out, color .3s ease-in-out

    .basic-button-line
        @include basic-button-selector
        min-width: 100%
</style>