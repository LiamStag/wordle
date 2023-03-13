import { ButtonStyled } from './Button.styled';

export const Button = ({ status, dataKey, handleClick, children }) => {
  return (
    <ButtonStyled
      status={status}
      data-key={dataKey}
      type="button"
      onClick={() => handleClick(dataKey)}
    >
      {children}
    </ButtonStyled>
  );
};
