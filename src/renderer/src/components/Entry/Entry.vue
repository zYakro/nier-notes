<template lang="">
  <div v-if="isEntryShown" class="entry-input-container" tabindex="0" @keydown.enter="onEnterKeyPressed">
    <BasicPanel title="Entry">
      <div class="content">
          {{ message }}
          <div class="text-input-container">
            <TextInput name="Input" @updateInputValue="updateInputValue" />
          </div>
      </div>
    </BasicPanel>
  </div>
  <SystemMessageOk ref="systemMessageRef" :message="errorMessage" />
</template>
<script>
import TextInput from '../TextInput/TextInput.vue';
import SystemMessageOk from '../SystemMessage/SystemMessageOk.vue';
import BasicPanel from '../Panels/BasicPanel.vue';

export default {
  components: {
    TextInput,
    SystemMessageOk,
    BasicPanel
  },
  data() {
    return {
      isEntryShown: false,
      message: '',
      inputValue: '',
      errorMessage: '',
      onEnterKeyFunction: () => { },
    };
  },
  methods: {
    onEnterKeyPressed() {
      const success = this.onEnterKeyFunction(this.inputValue);
      
      if(success){
        this.isEntryShown = false
      }
    },
    updateInputValue(value) {
      this.inputValue = value;
    },
    showErrorMessage(message) {
      this.$refs.systemMessageRef.displayOn(message);
    },
    showEntry(message, onEnterKey) {
      this.isEntryShown = true;
      this.onEnterKeyFunction = onEnterKey;
      this.message = message;
    },
  },
};
</script>
<style scoped lang="sass">
.entry-input-container
  width: 100vw
  height: 100vh
  display: flex
  justify-content: center 
  align-items: center
  flex-direction: column
  outline: none
  position: absolute
  left: 0
  right: 0
  background-color: rgba(0, 0, 0, 0.2)
  z-index: 500

.text-input-container
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  width: 100%
  height: 25px

.content
  width: 350px
  height: 120px 
  display: flex
  flex-direction: column
  gap: 15px
  padding: 8px

</style>