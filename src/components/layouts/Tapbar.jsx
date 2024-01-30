import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 100;
  bottom: 0;

  width: 100%;
  height: 4.375rem; /* 수정되면 App screen padding 수정해주기 */
  flex-shrink: 0;

  background: white;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.25);

  z-index: 97;
`;

function Tapbar() {
  return <Wrapper>Tapbar</Wrapper>;
}

export default Tapbar;
