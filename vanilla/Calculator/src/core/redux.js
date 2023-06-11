import {observable} from "./Observer.js";

export const createStore = (reducer) => {
    const state = observable(reducer());
    const frozenState = {};

    Object.keys(state).forEach(key => {
        Object.defineProperty(frozenState, key, {
            get : () => state[key]
        });
    });

    const dispatch = (action) => {
        const newState = reducer(state, action);

        for(const [key, value] of Object.entries(newState)) {
            if(!state[key] && state[key] !== 0 && state[key] !== "") continue;
            state[key] = value;
        }
    }

    const getState = () => frozenState;

    return {dispatch, getState};
}