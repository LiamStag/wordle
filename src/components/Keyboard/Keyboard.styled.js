import styled from 'styled-components';

export const KeyboardStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(12, max-content);
  grid-template-rows: auto;
  gap: 5px;

  & > button:last-child {
    grid-column-start: 11;
    grid-column-end: 13;
  }
`;
