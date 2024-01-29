import styled from 'styled-components';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  bottom: 0;

  width: 100%;
  height: 3.125rem; /* 수정되면 App screen padding 수정해주기 */
  flex-shrink: 0;

  background-color: white;
  border-bottom: 1px solid var(--gray-200, #d9d9d9);

  z-index: 99;
`;

function Navbar() {
  return <Wrapper>Navbar</Wrapper>;
}

export default Navbar;
