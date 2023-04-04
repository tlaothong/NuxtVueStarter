import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite/lib/esm/components';

export const useSearchBar = () => {
  const EnableSearch = inject<Ref<boolean>>('searchable');
  EnableSearch!.value = true;

  onMounted(() => { initFlowbite() })
}