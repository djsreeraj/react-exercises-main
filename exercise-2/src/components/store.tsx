import { makeAutoObservable } from "mobx";

class Store{
    count: number = 0;

    constructor(){
        makeAutoObservable(this);
    }
}

const store = new Store();
export default store;
