import { ActionReducer, MetaReducer } from '@ngrx/store';

// console.log all actions
function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {
      console.log('state', state);
      console.log('action', action);
      return reducer(state, action);
    };
}
   
export const metaReducers: MetaReducer<any>[] = [debug];