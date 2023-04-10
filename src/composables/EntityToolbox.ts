import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite/lib/esm/components';

export const useFlowbite = () => {
  onMounted(() => { initFlowbite() })
}