import { Symbol } from '../Symbol';
import { DesktopStyled } from './Desktop.styled';
import { useSelector } from 'react-redux';
import { selectUserWord } from '../../features/wordSlice';

const updateOutput = (matrix) =>
  matrix.map((itemLine) =>
    itemLine.map((char) => (
      <Symbol key={char.id} status={char.status}>
        {char.text}
      </Symbol>
    ))
  );

export const Desktop = () => {
  const userWord = useSelector(selectUserWord);

  return <DesktopStyled>{updateOutput(userWord)}</DesktopStyled>;
};
