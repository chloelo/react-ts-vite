import { useState } from 'react';

// import { ActionType } from './messengerReducer';

export function useReducer(reducer:any, initialState:any) {
  const [state, setState] = useState(initialState);
  function dispatch(action:any) {
    // 寫法一：
    const nextState = reducer(state, action)
    setState(nextState)

    // 寫法二：等同上面寫法
    // setState((s) => reducer(s, action));
  }
  return [state, dispatch];
}
