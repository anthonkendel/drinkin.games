import _Vue from 'vue';
import * as genericComponents from './index';

export function GenericPlugin(Vue: typeof _Vue): void {
  Object.entries(genericComponents).forEach(([key, component]) => {
    Vue.component(key, component);
  });
}