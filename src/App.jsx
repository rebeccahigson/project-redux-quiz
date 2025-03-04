
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from './reducers/quiz';
import './components/quiz.css';
import { CurrentQuestion } from './components/CurrentQuestion';

const reducer = combineReducers({
  quiz: quiz.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <section className="quiz-wrapper">
          <CurrentQuestion />
        </section>
      </main>
    </Provider>
  );
}
