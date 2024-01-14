<template lang="">
    <div class="recent-files-container">
        <div class="bottom-panel"> 
            <BottomPanel>
                <div class="recent-files-title">
                    Recent Files
                </div>
            </BottomPanel>
        </div>
        <SectionPanel>
            <div class="recent-files-list">
                <BasicButton v-for="(path, index) in recentFiles" :key="index" @click="onFileClick(path)" :name="getFileName(path)" icon="icon-file" />
            </div>
        </SectionPanel>
    </div>
</template>
<script setup>
import BasicButton from '../../Buttons/BasicButton/BasicButton.vue';
import SectionPanel from '../../Panels/SectionPanel.vue';
import BottomPanel from '../../Panels/BottomPanel.vue';

const { recentFiles } = defineProps(['recentFiles'])
const emit = defineEmits(['openEditor'])

const onFileClick = (name) => {
    emit("openEditor", name)
}

const getFileName = (path) => {
    const pathModule = require('path');
    return pathModule.basename(path)
}

</script>
<style scoped lang="sass">
    @import '@/styles/colors.sass'

    .recent-files-container
        width: 100%
        height: 100%
        display: flex
        justify-content: space-around
        align-items: space-around 
        flex-direction: column

    .recent-files-title
        width: 100%
        height: 100%
        background: $light-section-color
        display: flex
        align-items: center
        justify-content: flex-start
        color: $brown-color

    .recent-files-list
        width: 100%
        height: calc(100% - 45px)
        display: flex
        align-items: center
        justify-content: space-evenly
        flex-direction: row

    .bottom-panel
        width: 100%
        height: 40px

</style>