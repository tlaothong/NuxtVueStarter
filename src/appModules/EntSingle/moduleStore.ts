import { createStore } from '~/stores/creator';
import { moduleName, startPageNo, apiBaseUrl } from './settings';
// import { defineStore } from "pinia";

export const useModuleStore = createStore(moduleName, moduleName);

// const XuseModuleStore = defineStore(moduleName, () => {

//   const dataList = ref<any[]>([]);
//   const curPageNo = ref(startPageNo);

//   async function loadList(pageNo?: number) {
//     const page2Load = (pageNo ?? curPageNo.value) - startPageNo;
//     const { data, error } = await useFetch(apiBaseUrl, {
//       method: 'GET',
//       headers: { "Accept": "application/json" },
//     });

//     dataList.value = !error.value ? data.value as any[] : [];
//   }

//   async function postOne(newItem: any) {
//     const one = { ...newItem };
//     const { data, error } = await useFetch(apiBaseUrl, {
//       method: 'POST',
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(one),
//     });
//     const newid = (<any>data.value).id;
//     newItem.id = one.id = newid;
//     dataList.value.push(one);

//     return newid;
//   }

//   async function putOne(dataItem: any) {
//     const one = { ...dataItem };
//     const { data, error } = await useFetch(`${apiBaseUrl}/${one.id}`, {
//       method: 'PUT',
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(one),
//     });
//     const elemIndex = dataList.value.findIndex(it => it.id == one.id);
//     dataList.value = dataList.value.splice(elemIndex, 1, one);
//   }

//   async function deleteOne(dataItem: any) {
//     const one = { ...dataItem };
//     const { data, error } = await useFetch(`${apiBaseUrl}/${one.id}`, {
//       method: 'DELETE',
//       // headers: { "Content-Type": "application/json" },
//       // body: JSON.stringify(one),
//     });
//     const elemIndex = dataList.value.findIndex(it => it.id == one.id);
//     dataList.value = dataList.value.splice(elemIndex, 1);
//   }

//   async function getOne(id:any) {
//     const { data, error } = await useFetch(`${apiBaseUrl}/${id}`, {
//       method: 'GET',
//       headers: { "Accept": "application/json" },
//     });

//     return data.value as IEntityModel;
//   }

//   interface IEntityModel {
//     fname: string;
//     lname: string;
//     bio: string;
//     region: string;
//   }

//   return { dataList, loadList: loadList, postOne: postOne, getOne, putOne: putOne, deleteOne }
// })