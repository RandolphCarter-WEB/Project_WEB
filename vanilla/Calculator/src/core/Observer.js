let currentObserver = null;

export const observe = func => {
    currentObserver = func;
    func();
    currentObserver = null;
}

export const observable = obj => {
    Object.keys(obj).forEach(key => {
        let _value = obj[key];
        const observers = new Set();

        Object.defineProperty(obj, key, {
            get() {
                if(currentObserver) observers.add(currentObserver);
                return _value;
            },
            set(newValue) {
                if(_value === newValue) return;
                if(JSON.stringify(_value) === JSON.stringify(newValue)) return;
                _value = newValue;
                observers.forEach(fn => fn());
            }
        });
    });

    return obj;
}