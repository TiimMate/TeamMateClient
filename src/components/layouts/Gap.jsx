import styled from 'styled-components';

/** @deprecated: layouts ==> atoms */
function Gap({ children, height = '1.25rem' }) {
  return <Wrapper height={height}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  position: relative;

  width: 100%;
  height: ${(props) => props.height};

  background-color: #f0f0f0;
`;

export default Gap;
