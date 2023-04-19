// export const initialState = {
//   selectedId: 0,
//   message: 'Hello',
// };
export const initialState = {
  selectedId: 0,
  messages: {
    0: 'Hello, Taylor', // Draft for contactId = 0
    1: 'Hello, Alice', // Draft for contactId = 1
    2: 'Hello, Bob', // Draft for contactId = 2
  },
};
// type messagesKey  = keyof typeof initialState.messages
type AppState = typeof initialState;
export type ActionType = { type: "changed_selection", contactId: number }
  | { type: "edited_message", message: string } | { type: "sent_message" };
  
export function messengerReducer(state: AppState, action: ActionType) {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case 'edited_message': {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message
        }
      };
    }
    case 'sent_message': {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: ''
        }
      };
    }
    default: {
      throw new Error();
      // throw Error('Unknown action: ' + action.type);
      // return state;

    }
  }
}
