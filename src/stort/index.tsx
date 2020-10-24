import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { counterRedcuer as home } from "./redcuer/home";
import { counterRedcuer as list } from "./redcuer/list";
import { counterRedcuer as item } from "./redcuer/item";
import goods from "./redcuer/goods";
import detail from "./redcuer/detail";
import user from "./redcuer/user";
let state = combineReducers({ home, list, item, detail, goods, user });
const store = createStore(state, applyMiddleware(thunk));

export default store;
