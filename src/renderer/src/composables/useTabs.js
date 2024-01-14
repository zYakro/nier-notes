import { ref, reactive } from 'vue'

export const useTabs = () => {
  const tabs = reactive([])
  const currentTab = ref('')

  const addTab = (name) => {
    if(tabs.includes(name)){
      return;
    }
    tabs.push(name)
  }

  const addTabAndNavigate = (name) => {
    if(tabs.includes(name)){
      return changeTab(name)
    }

    addTab(name)
    changeTab(name)
  }

  const changeTab = (name) => {
    currentTab.value = tabs[tabs.indexOf(name)]
  }

  const deleteTab = (name) => {
    if(tabs.includes(name)){
      tabs.splice(tabs.indexOf(name), 1)
      currentTab.value = tabs[0]
    }
  }

  return {
    tabs,
    currentTab,
    addTab,
    addTabAndNavigate,
    changeTab,
    deleteTab
  }
}