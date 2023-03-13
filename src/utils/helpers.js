import { VOLUME_STRINGS, VOLUME_CHAIR } from './config';

// Возвращает массив с переданным значение iteration раз
export const assignmentChair = (value, iteration) => {
  let result = [];
  for (let i = 0; i < iteration; i++) {
    result.push(value);
  }
  return result;
};

export const initialStatusBtn = () => {
  const result = [];

  for (let i = 0; i < 34; i++) {
    result.push('default');
  }

  return result;
};

export const initialMatrix = () => {
  const result = [];

  for (let i = 0; i < VOLUME_STRINGS; i++) {
    result.push([]);

    for (let j = 0; j < VOLUME_CHAIR; j++) {
      result[i].push({
        id: `${i}-${j}`,
        text: '',
        status: 'default',
      });
    }
  }

  return result;
};
