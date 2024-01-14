<template lang="">
    <BasicPanel title="File Information">
            <div class="file-icon-container">
                <i class="file-icon icon-file"></i>
            </div>
            <div class="info-container">
                <p class="info-item">{{hoveredFileName}}</p>
                <i class="line"></i>
                <p class="info-item">{{lastTimeModified}}</p>
                <i class="line"></i>
                <p class="info-item">{{firstWords}}</p>
                <i class="line"></i>
            </div>
    </BasicPanel>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue';
import BasicPanel from '../../Panels/BasicPanel.vue';
import { getPath } from '../../../services/file.service'
import * as File from '../../../services/file.service';

const props = defineProps(['hoveredFileName', 'path']);
const lastTimeModified = ref('');
const firstWords = ref('');

const getFileLastTimeModified = async () => {
    const time = await File.getFileLastTimeModified(getPath(props.path, props.hoveredFileName));
    lastTimeModified.value = time;
};

const getFirstWords = async () => {
    const word = await File.getFirstWordsInFile(getPath(props.path, props.hoveredFileName), 4);
    firstWords.value = word;
};

const getInfo = () => {
    getFileLastTimeModified();
    getFirstWords();
};

watch(() => props.hoveredFileName, getInfo);
</script>
<style scoped lang="sass">
    @import '@/styles/colors.sass'

    $max-width: 280px
    .info-container
        width: 100%
        height: calc(100% - 120px)
        overflow-y: auto
        display: flex
        align-items: center
        justify-content: flex-start 
        flex-direction: column

    .info-item
        display: flex
        justify-content: flex-start
        align-items: flex-start
        width: 90%
        max-width: $max-width
        min-height: 25px
        height: auto

    .line
        width: 90%
        max-width: $max-width
        margin: 5px 0 
        border-top: 2px solid $light-color

    .file-icon-container
        width: 90%
        max-width: $max-width
        height: 120px
        background: $light-color
        display: flex
        justify-content: center
        align-items: center
        margin-bottom: 5px
    .file-icon
        width: 50px
        height: 50px
        filter: var(--icon-light-section-color)
</style>