import { moduleName, startPageNo, apiBaseUrl } from './settings';
import { defineStore } from "pinia";

export const useModuleStore = defineStore(moduleName, () => {

  const dataList = ref<any[]>([]);
  const curPageNo = ref(startPageNo);

  async function loadDataList(pageNo?: number) {
    const page2Load = (pageNo ?? curPageNo.value) - startPageNo;
    const { data, error } = await useFetch(apiBaseUrl, {
      method: 'GET',
      headers: { "Accept": "application/json" },
    });

    dataList.value = !error.value ? data.value as any[] : [];
  }

  async function addOne(newItem: any) {
    const one = { ...newItem };
    const { data, error } = await useFetch(apiBaseUrl, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(one),
    });
    const newid = (<any>data.value).id;
    newItem.id = one.id = newid;
    dataList.value.push(one);

    return newid;
  }

  return { dataList, loadDataList, addOne }
})