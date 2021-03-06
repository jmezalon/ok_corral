import sessionReducer from './session_reducer';
import usersReducer from './users_reducer';
import questionsReducer from './questions_reducer';
import answersReducer from './answers_reducer';
import dialoguesReducer from './dialogues_reducer';
import messagesReducer from './messages_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers(

  {
    session: sessionReducer,
    users: usersReducer,
    questions: questionsReducer,
    answers: answersReducer,
    dialogues: dialoguesReducer,
    messages: messagesReducer
  }
  
);

export default rootReducer;
