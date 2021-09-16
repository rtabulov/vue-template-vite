import { defineStore } from 'pinia';

export const useCounter = defineStore('counter', {
  state: () => ({
    counter: 0,
  }),

  actions: {
    increment() {
      this.counter++;
    },
  },
});
