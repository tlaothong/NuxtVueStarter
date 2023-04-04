import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite/lib/esm/components';

export const useSearchBar = (options: { hide?: boolean } = {}) => {
  const {
    hide = false
  } = options;
  const EnableSearch = inject<Ref<boolean>>('searchable');
  EnableSearch!.value = !hide;

  onMounted(() => { initFlowbite() })
}
