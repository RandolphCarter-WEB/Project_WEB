export default class Store {
    memoData;

    constructor() {
        this.memoData = [{title: "test", text: "test"}];
    }

    setMemoData(newData) {
        this.memoData = [ ...this.memoData, ...newData ];
    }

    getMemoData() {
        return this.memoData;
    }

    deleteMemoData(target) {
        
    }
}