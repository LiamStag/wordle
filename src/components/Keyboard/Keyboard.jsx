import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../Button';
import { KeyboardStyled } from './Keyboard.styled';
import {
  selectUserWord,
  updateUserWord,
  updateMessage,
  selectWord,
  deleteUserWord,
  selectLine,
  selectChair,
} from '../../features/wordSlice';

import dictionary from '../../data/dictionary.json';
import { VOLUME_CHAIR } from '../../config';

const keys = [
  { id: 0, attribute: 'Й', text: 'Й' },
  { id: 1, attribute: 'Ц', text: 'Ц' },
  { id: 2, attribute: 'У', text: 'У' },
  { id: 3, attribute: 'К', text: 'К' },
  { id: 4, attribute: 'Е', text: 'Е' },
  { id: 5, attribute: 'Н', text: 'Н' },
  { id: 6, attribute: 'Г', text: 'Г' },
  { id: 7, attribute: 'Ш', text: 'Ш' },
  { id: 8, attribute: 'Щ', text: 'Щ' },
  { id: 9, attribute: 'З', text: 'З' },
  { id: 10, attribute: 'Х', text: 'Х' },
  { id: 11, attribute: 'Ъ', text: 'Ъ' },
  { id: 12, attribute: 'Ф', text: 'Ф' },
  { id: 13, attribute: 'Ы', text: 'Ы' },
  { id: 14, attribute: 'В', text: 'В' },
  { id: 15, attribute: 'А', text: 'А' },
  { id: 16, attribute: 'П', text: 'П' },
  { id: 17, attribute: 'Р', text: 'Р' },
  { id: 18, attribute: 'О', text: 'О' },
  { id: 19, attribute: 'Л', text: 'Л' },
  { id: 20, attribute: 'Д', text: 'Д' },
  { id: 21, attribute: 'Ж', text: 'Ж' },
  { id: 22, attribute: 'Э', text: 'Э' },
  { id: 23, attribute: 'backspace', text: '⌫' },
  { id: 24, attribute: 'Ё', text: 'Ё' },
  { id: 25, attribute: 'Я', text: 'Я' },
  { id: 26, attribute: 'Ч', text: 'Ч' },
  { id: 27, attribute: 'С', text: 'С' },
  { id: 28, attribute: 'М', text: 'М' },
  { id: 29, attribute: 'И', text: 'И' },
  { id: 30, attribute: 'Т', text: 'Т' },
  { id: 31, attribute: 'Ь', text: 'Ь' },
  { id: 32, attribute: 'Б', text: 'Б' },
  { id: 33, attribute: 'Ю', text: 'Ю' },
  { id: 34, attribute: 'enter', text: 'Ввод ↵' },
];

export const Keyboard = () => {
  const dispatch = useDispatch();
  const word = useSelector(selectWord);
  const userWord = useSelector(selectUserWord);
  const line = useSelector(selectLine);
  const char = useSelector(selectChair);

  console.log(word);

  const handleClick = (dataKey) => {
    switch (dataKey) {
      case 'backspace': {
        dispatch(deleteUserWord());
        dispatch(updateMessage(''));
        break;
      }
      case 'enter': {
        if (char < VOLUME_CHAIR) {
          dispatch(updateMessage('Недостаточно букв'));
        } else {
          let isMatch = false;
          const wordUserString = userWord[line].map((item) => item.text).join('');

          dictionary.words.forEach((item) => {
            wordUserString === item && (isMatch = true);
          });

          if (!isMatch) {
            dispatch(updateMessage('Такого слова нет в словаре'));
          }

          console.log(isMatch);
        }
        break;
      }
      default: {
        dispatch(updateUserWord(dataKey));
        dispatch(updateMessage(''));
        break;
      }
    }
  };

  return (
    <KeyboardStyled>
      {keys.map((item) => (
        <Button key={item.id} dataKey={item.attribute} handleClick={handleClick}>
          {item.text}
        </Button>
      ))}
    </KeyboardStyled>
  );
};
