import {createStore} from "../core/redux.js";

const initState = {
    currentData : 0,
    saveData : 0,
    resultData : 0,
    operator : ""
}

const createAction = (type) => (payload) => ({ type, payload });

export const inputNum = createAction("INPUT_NUM");
export const inputOperator = createAction("INPUT_OPERATOR");
export const operator = createAction("OPERATOR");

export const actionHandlers = {
    "INPUT_NUM" : (state, payload) => ({ ...state, currentData: payload }),
    "INPUT_OPERATOR" : (state, payload) => ({ ...state, currentData: 0, resultData : state.currentData, operator : payload }),
    "OPERATOR" : (state, payload) => ({ ...state, saveData : payload })
}

export const store = createStore((state = initState, action = {}) => {
    if (actionHandlers.hasOwnProperty(action.type)) {
        const handler = actionHandlers[action.type];
        return handler(state, action.payload);
    }
    return state;
});