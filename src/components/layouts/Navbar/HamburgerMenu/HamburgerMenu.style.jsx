import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;

  position: fixed;
  top: 50px;

  width: 100%;
  height: 100%;
  z-index: 98;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const ContentWrapper = styled.div``;

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 120px;

  height: auto;
  background: #fff;
`;
export const Event = styled.div`
  width: 100%;

  padding: 0.625rem 0 0.625rem 1.25rem;

  background-color: ${(props) =>
    props.$isActivated ? 'var(--Cyan-Blue, #0075FF);' : '#FFF;'};
  color: ${(props) =>
    props.$isActivated ? '#FFF;' : 'var(--kakao-logo, #000);'};

  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem; /* 200% */

  &:hover {
    cursor: pointer;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 240px;

  background: var(--Misty-Blue, #bddbff);
`;
export const Category = styled.div`
  display: flex;
  width: 80%;

  padding: 0.625rem 0 0.625rem 1.25rem;

  background: var(--Misty-Blue, #bddbff);

  color: var(--kakao-logo, #000);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem; /* 200% */

  &:hover {
    cursor: pointer;
    color: var(--Cyan-Blue, #0075ff);
  }
  &:focus {
    color: var(--Cyan-Blue, #0075ff);
  }
`;
