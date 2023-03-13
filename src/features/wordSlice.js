import { createSlice } from '@reduxjs/toolkit';

import dictionary from '../data/dictionary.json';
import { VOLUME_CHAIR } from '../utils/config';
import { initialMatrix, initialStatusBtn } from '../utils/helpers';

const initialState = {
  word: [],
  userWord: [],
  statusBtn: [],
  line: 0,
  chair: 0,
  message: '',
};

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    newGame: (state) => {
      // Генерирую псевдослучайное число для номера слова из словаря. Получаю слово из словаря.
      state.word =
        dictionary.words[Math.floor(Math.random() * (dictionary.words.length - 1))].slice();
      state.userWord = initialMatrix();
      state.statusBtn = initialStatusBtn();
      state.line = 0;
      state.chair = 0;
      state.message = '';
    },
    updateUserWord: (state, action) => {
      if (state.chair < VOLUME_CHAIR) {
        state.userWord[state.line][state.chair].text = action.payload;
        state.chair = state.chair + 1;
      }
    },
    updateStatusWord: (state, action) => {
      state.userWord[action.payload.line][action.payload.index].status = action.payload.status;
    },
    deleteUserWord: (state) => {
      if (state.chair > 0) {
        state.chair = state.chair - 1;
        state.userWord[state.line][state.chair].text = '';
      }
    },
    updateLine: (state) => {
      state.line = state.line + 1;
    },
    updateMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const {
  newGame,
  updateUserWord,
  deleteUserWord,
  updateLine,
  updateMessage,
  updateStatusWord,
} = wordSlice.actions;

export const selectWord = (state) => state.word.word;
export const selectUserWord = (state) => state.word.userWord;
export const selectStatusBtn = (state) => state.word.statusBtn;
export const selectLine = (state) => state.word.line;
export const selectChair = (state) => state.word.chair;
export const selectMessage = (state) => state.word.message;

export default wordSlice.reducer;
