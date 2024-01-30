import styled from 'styled-components';
import Button300 from '../../atoms/Button300';

export const Wrapper = styled.div`
  width: 100%;
`;

export const NewCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 31px 30px 30px;
`;

export const NewCommentHeader = styled.h2`
  margin-bottom: 4px;
  color: var(--Black, var(--kakao-logo, #000));
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
  letter-spacing: -0.6px;
`;

export const NewCommentButton = styled(Button300)`
  margin-top: 10px;
  width: 100%;
`;
