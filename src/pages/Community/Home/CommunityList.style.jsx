import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;
export const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-start;
  border-top: 1px solid var(--gray-100, #f0f0f0);
  padding: 9px 26px 9px 16px;
`;

export const Category = styled.div`
  color: var(--kakao-logo, #000);
  font-family: 'Pretendard';
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Title = styled.div`
  margin-left: 37px;
  color: var(--kakao-logo, #000);
  font-family: 'Pretendard';
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Date = styled.div`
  margin-left: auto;
  color: var(--kakao-logo, #000);
  font-family: 'Pretendard';
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PostList = styled.div``;

export const Loading = styled.p`
  font-family: 'Pretendard';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
`;
