import { SymbolStyled } from './Symbol.styled';

export const Symbol = ({ status, children }) => {
  return <SymbolStyled status={status}>{children}</SymbolStyled>;
};
