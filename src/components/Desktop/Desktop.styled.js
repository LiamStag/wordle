import styled from 'styled-components';

import { VOLUME_CHAIR } from '../../utils/config';

const getTemplateColumns = () => {
  return `
  grid-template-columns: repeat(${VOLUME_CHAIR}, max-content);
  `;
};

export const DesktopStyled = styled.div`
  display: grid;
  ${getTemplateColumns}
  grid-template-rows: auto;
  gap: 6px 4px;
`;
