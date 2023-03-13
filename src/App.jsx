<<<<<<< HEAD
import React from 'react';
// import fs from 'fs';
import Desktop from './components/Desktop';
import Keyboard from './components/Keyboard';
import { useState } from 'react';
import dictionary from './data/dictionary.json';
import Message from './components/Message';
import Header from './components/Header';
import Word from './components/New_word';

let word = Word;

// Генерирую псевдослучайное число для номера слова из словаря. Получаю слово из словаря в переменную word.
//- del dev
const wordLenght = word.length;
// Количество букв в строке
const VOLUME_CHAIR = wordLenght;
// Количество строк
const VOLUME_STRINGS = 6;
// Переменная для записи правильности букв в слове
let isTrueChar = assignmentChair(false, VOLUME_CHAIR);
=======
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Desktop } from './components/Desktop';
import { Keyboard } from './components/Keyboard';
import { Message } from './components/Message';

import { newGame, selectMessage } from './features/wordSlice';
>>>>>>> 929ceffca1856fe88dfafd97311c7781ba2e2ebe

let inDictionaty = false;

dictionary.words.forEach((item) => {
  (word === item) && (inDictionaty = true);
});

if (!inDictionaty) {
  console.log('here');
  dictionary.words.push(word);
}

const App = () => {
  const dispatch = useDispatch();
  const message = useSelector(selectMessage);

<<<<<<< HEAD
  // Переменная для рендера букв в desktop
  const [wordUser, setWordUser] = useState([[], [], [], [], [], []]);
  // Переменная для обновления wordUser
  let copyWordUser = [...wordUser];

  // Переменная для рендера стилей кнопок на клавиатуре
  const [buttonStyle, setButtonStyle] = useState(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
  // Переменная с копией buttonStyle для её обновления
  let copyButtonStyle = [...buttonStyle];

  // Переменная для рендера стилей
  const [charStyle, setCharStyle] = useState([['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']]);
  // Переменная с копией buttonStyle для её обновления
  let copyCharStyle = [...charStyle];

  // Переменная для рендера вывода сообщений
  const [message, setMessage] = useState('');

  // Переменная для записи нажатых кнопок с буквами
  const [keyPress, setKeyPress] = useState([[], [], [], [], [], []]);
  // Переменная с копией keyPress для её обновления
  let copyKeyPress = [...keyPress];

  // Номер строки для ввода
  const [numberOfString, setNumberOfString] = useState(0);


  // Функция проверки количества повторяющихся букв в слове
  const CharCheck = (str, char) => {
    let counter = 0;

    for (let i = 0; i < VOLUME_CHAIR; i++) {
      (str[i] === char) && counter++;
    }
    return counter;
  }

  // Проверяем есть ли совпавшие буквы
  const trueChar = (char) => {
    for (let i = 0; i < VOLUME_CHAIR; i++) {
      if ((word[i] === char) && (isTrueChar[i] === true)) {
        return true;
      }
    }
    return false;
  }


  const clean = () => {
    // Обнуляем вывод сообщения
    setMessage('');
    // Обнуляем номер строки
    setNumberOfString(0);
    // Очищаем введённые слова
    setWordUser([[], [], [], [], [], []]);
    // Удаляем данные о нажатых кнопках с буквами
    setKeyPress([[], [], [], [], [], []]);
    // Очищаем стили символов на desktop
    setCharStyle([['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']]);

    // Очищаем стили кнопок
    for (let char = 1; char < 34; char++) {
      copyButtonStyle[char] = '';
    }
    setButtonStyle(copyButtonStyle);

    // Генерируем новое слово
    word = dictionary.words[Math.floor(Math.random() * (dictionary.words.length - 1))];
    //- del dev
    console.log('Word:', word);
  }

  // Функция сравнения введённого пользователем слова и загаданного слова
  const buttonEnter = () => {
    // Создаём слово из массива букв
    const copyWordUserString = wordUser[numberOfString].toString().replaceAll(',', '');
    // Переменная для записи правильности букв в слове
    isTrueChar = [false, false, false, false, false];

    // Проверяем правильность введённого слова
    if ((copyWordUserString === word) && (numberOfString < VOLUME_STRINGS)) {
      for (let char = 0; char < VOLUME_CHAIR; char++) {
        copyButtonStyle[keyPress[numberOfString][char]] = 'button_true';
        setButtonStyle(copyButtonStyle);

        copyCharStyle[numberOfString][char] = 'symbol_true';
        setCharStyle(copyCharStyle);
      }

      setMessage('Вы угадали! Нажмите "Ввод" чтобы начать заново.');
      setNumberOfString(VOLUME_STRINGS);
      return;
    }

    // Делаем все кнопки и введённые буквы ложными
    for (let char = 0; char < VOLUME_CHAIR; char++) {
      copyButtonStyle[keyPress[numberOfString][char]] = 'button_false';
      copyCharStyle[numberOfString][char] = 'symbol_false';
    }
    setButtonStyle(copyButtonStyle);
    setCharStyle(copyCharStyle);

    // Проверяем на совпадение введённых букв с буквами в загаданном слове. Если введённая буква совпадает с буквой из загаданного слова, то присваиваем true.
    for (let char = 0; char < VOLUME_CHAIR; char++) {
      for (let i = 0; i < VOLUME_CHAIR; i++) {
        if ((wordUser[numberOfString][char] === word[i]) && (char === i)) {
          copyButtonStyle[keyPress[numberOfString][char]] = 'button_true';
          copyCharStyle[numberOfString][char] = 'symbol_true';
          isTrueChar[char] = true;
        }
      }
    }
    setButtonStyle(copyButtonStyle);
    setCharStyle(copyCharStyle);

    let repeat = 0;

    for (let char = 0; char < VOLUME_CHAIR; char++) {
      // Проверяем на совпавшие буквы, если буква не совпала
      if (!isTrueChar[char]) {
        if (CharCheck(word, wordUser[numberOfString][char]) > 0) {

          //  В набранном слове такая буква только одна
          if (CharCheck(wordUser[numberOfString], wordUser[numberOfString][char]) === 1) {
            copyButtonStyle[keyPress[numberOfString][char]] = 'button_truefalse';
            setButtonStyle(copyButtonStyle);
            copyCharStyle[numberOfString][char] = 'symbol_possible';
            setCharStyle(copyCharStyle);

            // В набранном слове таких букв больше чем одна
          } else {

            // Совпадающих букв в загаданном слове столько же сколько и во введённом
            if (CharCheck(word, wordUser[numberOfString][char]) ===
              CharCheck(wordUser[numberOfString], wordUser[numberOfString][char])
            ) {
              copyButtonStyle[keyPress[numberOfString][char]] = 'button_truefalse';
              setButtonStyle(copyButtonStyle);
              copyCharStyle[numberOfString][char] = 'symbol_possible';
              setCharStyle(copyCharStyle);

              // Совпадающих букв в загаданном слове больше чем во введённом
            } else if ((CharCheck(word, wordUser[numberOfString][char]) >
              CharCheck(wordUser[numberOfString], wordUser[numberOfString][char]))) {
              copyButtonStyle[keyPress[numberOfString][char]] = 'button_truefalse';
              setButtonStyle(copyButtonStyle);
              copyCharStyle[numberOfString][char] = 'symbol_possible';
              setCharStyle(copyCharStyle);
              // Совпадающих букв в загаданном слове меньше чем во введённом
            } else if ((CharCheck(word, wordUser[numberOfString][char]) <
              CharCheck(wordUser[numberOfString], wordUser[numberOfString][char])) &&
              (repeat === 0) &&
              (!trueChar(wordUser[numberOfString][char]))
            ) {
              copyButtonStyle[keyPress[numberOfString][char]] = 'button_truefalse';
              setButtonStyle(copyButtonStyle);
              copyCharStyle[numberOfString][char] = 'symbol_possible';
              setCharStyle(copyCharStyle);
              repeat++;
            }
          }
        }

      }
    }

    // Переходим к следующей строке
    setNumberOfString(numberOfString + 1);
  }

  const onClick = (text, number) => {
    // Переменная для валидации наличия слова в словаре
    let isWord = false;
    // Обнуляем вывод сообщения
    setMessage('');

    // Если нажат backspace
    if (number === 0) {
      // Удаляем последний символ в слове юзера
      copyWordUser[numberOfString].pop();
      setWordUser(copyWordUser);
      // Удаляем последнюю нажатую кнопку
      copyKeyPress[numberOfString].pop();
      setKeyPress(copyKeyPress);

      // Если нажат Enter
    } else if (number === 34) {

      // Если в слове VOLUME_CHAIR букв
      if ((numberOfString < VOLUME_CHAIR) && (wordUser[numberOfString].length === VOLUME_CHAIR)) {
        // Создаём слово из массива букв
        const copyWordUserString = wordUser[numberOfString].toString().replaceAll(',', '');
        // Запускаем цикл с проверкой совпадения введённого слова и слов в словаре
        dictionary.words.forEach((item) => {
          (copyWordUserString === item) && (isWord = true);
        });
        // Если слово есть в словаре, то вызываем функцию buttonEnter, иначе выводим текст 'Такого слова нет в словаре'
        isWord ? buttonEnter() : setMessage('Такого слова нет в словаре');
        // Вызываем функцию очистки
      } else if (numberOfString === VOLUME_STRINGS) {
        clean();
        return;
        // Если использованы все VOLUME_STRINGS попыток
      } else if (numberOfString === VOLUME_STRINGS - 1) {
        buttonEnter();
        setMessage('Вы проиграли. Нажмите "Ввод" чтобы начать заново.');
        setNumberOfString(numberOfString + 1);
        return;
        // Если в слове меньше VOLUME_CHAIR букв, то выводим текст 'Недостаточно букв'
      } else if ((numberOfString < VOLUME_STRINGS) && (wordUser[numberOfString].length < VOLUME_CHAIR)) {
        setMessage('Недостаточно букв');
      }

      // Если нажата любая кнопка с буквой
    } else {
      // Проверка на длину слова. Если длина меньше VOLUME_CHAIR, то 
      if ((numberOfString < VOLUME_STRINGS) && (wordUser[numberOfString].length < VOLUME_CHAIR)) {
        // Прибавляем нажатую букву в конец слова.
        copyWordUser[numberOfString].push(text);
        setWordUser(copyWordUser);
        // Добавляем номер нажатой кнопки с буквой в конец подмассива с номером line
        copyKeyPress[numberOfString].push(number);
        setKeyPress(copyKeyPress);
      }
    }
  }


  return (
    <div className='app'>
      <Header></Header>
      <Desktop wordUser={wordUser} className={charStyle} />
=======
  useEffect(() => {
    dispatch(newGame());
  }, [dispatch]);

  return (
    <div className="app">
      <Desktop />
>>>>>>> 929ceffca1856fe88dfafd97311c7781ba2e2ebe
      <Message>{message}</Message>
      <Keyboard />
    </div>
  );
};

export default App;
