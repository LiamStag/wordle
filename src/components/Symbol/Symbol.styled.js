import styled from 'styled-components';

const getStatusProps = ({ status }) => {
  switch (status) {
    case true: {
      return `
        background-color: #009933;
        color: white;
      `;
    }
    case false: {
      return `
        background-color: #666;
        color: white;
      `;
    }
    case 'possible': {
      return `
        background-color: #ff9900;
        color: white;
      `;
    }
    default: {
      return `
        background-color: #ddd;
        color: black;
      `;
    }
  }
};

export const SymbolStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 35px;
  border: none;
  border-radius: 6px;
  flex-shrink: 0;
  font-size: 1.6rem;
  font-weight: 600;
  user-select: none;

  @media (min-width: 415px) {
    font-size: 2.2rem;
    width: 50px;
    height: 45px;
  }

  ${getStatusProps}
`;
