import _Vue from 'vue';
import * as genericComponents from '@/components/generic/index';

export function ComponentPlugin(Vue: typeof _Vue): void {
  Object.entries(genericComponents).forEach(([key, component]) => {
    Vue.component(key, component);
  });
}