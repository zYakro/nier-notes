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
</style>