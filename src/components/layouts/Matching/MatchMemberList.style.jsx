import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  font-family: Pretendard;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 8px 20px;
`;

export const MemberInfo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid black; // 이미지가 없는 관계로 임시 코드 생성
  border-radius: 50%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TeamName = styled.p`
  color: black;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

export const MatchDetail = styled.p`
  color: var(--gray-300);
  font-size: 10px;
  line-height: 20px;
`;

export const Button = styled.div`
  display: flex;
  width: 70px;
  height: 30px;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 6px;
  background: var(--blue-400, #0075ff);
  font-size: 12px;
  line-height: 22px;
  letter-spacing: -0.6px;
`;
