import { createStore } from "redux";
import reducer from "./reducer";
import {
  createAddUserAction,
  createDeleteUserAction,
  createUpdateUserAction,
} from "./action/usersAction";

const store = createStore(reducer);

// console.log(store);

const unListen = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(
  createAddUserAction({
    id: 3,
    name: "abc",
    age: 10,
  })
);
store.dispatch(createUpdateUserAction(3,{ id: 5, name: "jhahahha", age: 121 }));
store.dispatch(
  createAddUserAction({
    id: 10,
    name: "abc",
    age:20,
  })
);
// store.dispatch(createDeleteUserAction(3));



unListen(); //取消监听
// console.log(store.getState())