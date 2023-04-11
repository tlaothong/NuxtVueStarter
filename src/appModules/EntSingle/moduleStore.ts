import { moduleName, startPageNo, apiBaseUrl } from './settings';
import { defineStore } from "pinia";

export const useModuleStore = defineStore(moduleName, () => {

  const dataList = ref<any[]>([]);
  const curPageNo = ref(startPageNo);

  async function loadDataList(pageNo?: number) {
    const page2Load = (pageNo ?? curPageNo.value) - startPageNo;
    const { data, error } = await useFetch(apiBaseUrl);

    dataList.value = error ? [] : data.value as any[];
  }

  async function addOne(newItem:any) {
    dataList.value.push(newItem);
  }
  
  return { dataList, loadDataList, addOne }
})