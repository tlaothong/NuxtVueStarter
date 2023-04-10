import { moduleName, startPageNo, apiBaseUrl } from './settings';
import { defineStore } from "pinia";

export const useModuleStore = defineStore(moduleName, () => {

  const dataList = ref<any[]>([]);
  const curPageNo = ref(startPageNo);

  async function loadDataList(pageNo?: number) {
    const page2Load = (pageNo ?? curPageNo.value) - startPageNo;
    const { data } = await useFetch(apiBaseUrl);

    dataList.value = data.value as any[];
  }
  
  return { dataList, loadDataList }
})