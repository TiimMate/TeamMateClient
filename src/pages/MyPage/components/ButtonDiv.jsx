import styled from 'styled-components';
import Button300 from '../../../components/atoms/Button300';

function ButtonDiv({ children, onClick }) {
  return (
    <Wrapper>
      <Button onClick={onClick}>{children}</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding-bottom: 2.5rem;
`;
const Button = styled(Button300)`
  width: 80%;

  box-sizing: border-box;
`;

export default ButtonDiv;
