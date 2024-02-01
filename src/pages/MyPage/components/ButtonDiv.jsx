import styled from 'styled-components';
import Button300 from '../../../components/atoms/Button300';

function ButtonDiv({ children, onClick }) {
  return (
    <Wrapper>
      <Button300 onClick={onClick}>{children}</Button300>
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

export default ButtonDiv;
