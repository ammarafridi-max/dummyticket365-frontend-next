import styled from 'styled-components';

const PrimarySection = styled.section`
  padding-top: ${({ pt, py }) => pt || py || '0px'};
  padding-bottom: ${({ pb, py }) => pb || py || '0px'};
  margin-top: ${({ mt, my }) => mt || my || '0px'};
  margin-bottom: ${({ mb, my }) => mb || my || '0px'};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
`;

export default PrimarySection;
