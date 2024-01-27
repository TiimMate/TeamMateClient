import styled from 'styled-components';

export default function LocationListBar() {
  return (
    <Wrapper>
      <ListContainer>
        <ListTitle>제목</ListTitle>
        <ListStatus>상태</ListStatus>
      </ListContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background: #fff;
`;

const ListContainer = styled.div`
  display: flex;
  padding: 9px 72px 9px 20px;
  align-items: flex-start;
`;

const ListTitle = styled.nav`
  color: var(--kakao-logo, #000);
  font-family: 'Pretendard Variable';
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ListStatus = styled.nav`
  margin-left: auto;
  color: var(--kakao-logo, #000);
  font-family: 'Pretendard Variable';
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
