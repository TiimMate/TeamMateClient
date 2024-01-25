import styled from 'styled-components';

const pencil = 'assets/pencil.svg';

export default function NewPost() {
  return (
    <Wrapper>
      <MessageContainer>
        <Button>
          <img src={pencil} alt='pencil' />
        </Button>
        <Message>새 글을 작성해 보세요!</Message>
      </MessageContainer>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 1px solid var(--Gray100, #f0f0f0);
  background: var(--Blue100, #f4f9ff);
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  padding: 0px 10px;
  gap: 10px;
`;

const Button = styled.button`
  flex: 1 0 0;
  height: 16px;
  border: none;
  background-color: transparent;
`;

const Message = styled.div`
  color: var(--Blue300, #0075ff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px; /* 181.25% */
  letter-spacing: -0.8px;
`;
