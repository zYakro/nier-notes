<template lang="">
    <div class="menu-container">
        <div class="left-box"></div>
       <div class="menu-icons-container">
            <SelectorBasicButton name="FILE" icon="icon-pencil" @click="createFile"/> 
            <SelectorBasicButton name="FOLDER" icon="icon-pencil" @click="createFolder"/> 
       </div>
    </div>
</template>
<script setup>
import SelectorBasicButton from '../../Buttons/SelectorBasicButton/SelectorBasicButton.vue';

const emit = defineEmits(['createFile', 'createFolder'])

const createFile = () => emit('createFile')
const createFolder = () => emit('createFolder')

</script>
<style scoped>
    .menu-container{
        width: auto;
        height: 100%;
        border-radius: 5px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: row;
    }

    .menu-icons-container{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: 15px;
        width: 100%;
    }

    .left-box{
        width: 20px;
        height: 100%;
        border-left: 12px solid #95917F;
        border-right: 3px solid #95917F;
        margin-right: 20px;
    }
</style>