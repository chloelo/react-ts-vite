export const initialState = {
  selectedId: 0,
  message: 'Hello',
};

type AppState = typeof initialState;
export type ActionType = { type: "changed_selection", contactId: number }
  | { type: "edited_message", message: string };
export function messengerReducer(state: AppState, action: ActionType) {
  const { type } = action
  switch (type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
        message: '',
      };
    }
    case 'edited_message': {
      return {
        ...state,
        message: action.message,
      };
    }
    default: {
      // throw new Error();
      throw Error('Unknown action: ' + (action as any).type);
      // return state;

    }
  }
}
