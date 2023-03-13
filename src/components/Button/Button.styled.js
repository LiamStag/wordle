import styled from 'styled-components';

const getStatusProps = ({ status }) => {
  switch (status) {
    case true: {
      return `
        background-color: #009933;
        cursor: pointer;
      `;
    }
    case false: {
      return `
        background-color: #666;
        cursor: default;
      `;
    }
    case 'default':
    default: {
      return `
      background-color: #ddd;
      cursor: pointer;
    `;
    }
  }
};

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 6px;
  flex-shrink: 0;
  font-size: 1.6rem;
  font-weight: 600;
  user-select: none;

  min-width: 45px;
  width: ${(props) => props.size || '100%'};

  ${getStatusProps}

  &:active {
    background-color: #ccc;
  }

  @media (min-width: 415px) {
    height: 40px;
  }
`;
