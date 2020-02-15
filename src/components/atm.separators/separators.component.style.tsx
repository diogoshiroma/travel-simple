import styled from 'styled-components';
import { ScreenUnit, GUTTER } from '../../resources/constants';
import Row from 'react-bootstrap/Row';

export const VSeparator = styled(Row)`
  margin-top: ${2 * GUTTER + ScreenUnit.Pixels};
`;