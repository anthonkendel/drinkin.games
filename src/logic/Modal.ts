/* eslint-disable no-console */
import Vue, { VNodeData } from 'vue';
import { CombinedVueInstance } from 'vue/types/vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let globalInstance: CombinedVueInstance<Vue, object, object, object, Record<never, any>>;

const globaModalId = 'TheOneTrueModal';

export function open(component: typeof Vue, data?: VNodeData): void {
  const instance = new Vue({ render: (h) => h(component, { ...data, attrs: { id: globaModalId } }) }).$mount();
  globalInstance = instance;
  window.document.body.append(instance.$el);
}

export function close(): void {
  const globalModal = window.document.querySelector(`#${globaModalId}`);
  if (globalInstance && globalModal) {
    globalModal.remove();
    globalInstance.$destroy();
  }
}