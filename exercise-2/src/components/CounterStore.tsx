import { makeAutoObservable } from "mobx";

class CounterStore {
  count: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    store.count++;
  }

  decrement() {
    store.count--;
  }
}

const store: CounterStore = new CounterStore();
export default store;
