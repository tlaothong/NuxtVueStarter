import { defineStore, storeToRefs } from "pinia";

let ApiBaseUrl: string;

export function _initSettings(apiBaseUrl: string) {
  ApiBaseUrl = apiBaseUrl;
}

export function createStore(storeName: string, dataName: string) {
  return defineStore(storeName, () => {
    const pageSize = ref(10);
    const currentPage = ref(1);

    const _creatorOfSync = _createSyncStore(storeName);
    const _syncStore = _creatorOfSync();
    const { needUpdate, currentPosition, latestUpdatePosition } = storeToRefs(_syncStore);
    // TODO: Replace this with more reasonable logic?
    _syncStore.requestUpdate();

    const _key_list = `${dataName}-list`;
    const { data: _dataList, refresh: refreshList } = useFetch(dataName, {
      key: _key_list,
      baseURL: ApiBaseUrl,
      query: {
        page: currentPage,
        per_page: pageSize,
      },
      headers: { "Accept": "application/json" },
      cache: "no-store",
    });
    const dataList = computed(() => _dataList.value as any[]);

    async function loadList() {
      await listPage(currentPage.value);
    }

    async function listPage(pageNo: number) {
      currentPage.value = pageNo;

      if (needUpdate.value) {
        await refreshList(); // update to the lastestUpdatePosition
        await _syncStore.completeUpdate(); // lastestUpdatePosition
      }
    }

    const activeId = ref<string>('');

    async function getOne(id: string = '') {
      if (!id)
        id = activeId.value;

      if (id !== activeId.value)
        activeId.value = id as string;

      const { data } = await useFetch(`${dataName}/${id}`, {
        baseURL: ApiBaseUrl,
        query: {},
        headers: { "Accept": "application/json" },
      });

      return data.value;
    }

    async function postOne(one: any) {
      const { data } = await useFetch(dataName, {
        baseURL: ApiBaseUrl,
        query: {},
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(one),
      });
      const newid = (<any>data.value).id;

      // TODO: Use the update tracking id from the server
      await _syncStore.requestUpdate(); // lastPosition

      return newid;
    }

    async function putOne(one: any) {
      const id = one?.id ?? activeId.value;

      if (id !== activeId.value)
        activeId.value = id;

      const { data } = await useFetch(`${dataName}/${id}`, {
        baseURL: ApiBaseUrl,
        query: {},
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(one),
      });

      // TODO: Use the update tracking id from the server
      await _syncStore.requestUpdate(); // lastPosition
    }

    async function deleteOne(id: string = '') {
      if (!id)
        id = activeId.value;

      const { data } = await useFetch(`${dataName}/${id}`, {
        baseURL: ApiBaseUrl,
        query: {},
        method: 'DELETE',
      });

      // TODO: Use the update tracking id from the server
      await _syncStore.requestUpdate(); // lastPosition
    }

    return { dataList, postOne, activeId, currentPage, listPage, loadList, putOne, deleteOne, getOne }
  });
}

const _createSyncStore = (storeName: string) => defineStore(`${storeName}-x-sync`, () => {
  const curPosition = ref('');
  const lastPosition = ref('');

  const needUpdate = computed(() => lastPosition.value > curPosition.value);
  const currentPosition = computed(() => curPosition.value);
  const latestUpdatePosition = computed(() => lastPosition.value);

  async function requestUpdate(position: string = '') {
    if (!position) {
      // TODO: Sync lastPosition ...
      position = Date.now().toString();
    }
    lastPosition.value = position;
  }

  async function completeUpdate(toPosition: string = '') {
    if (!toPosition)
      toPosition = lastPosition.value;

    if (toPosition > curPosition.value) {
      if (toPosition > lastPosition.value) {
        // TODO: sync update more or just update nothing
        return;
      }
      curPosition.value = toPosition;
    }
  }

  return { needUpdate, currentPosition, latestUpdatePosition, requestUpdate, completeUpdate };
});