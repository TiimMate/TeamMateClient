import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 126px;
  gap: 13px;
`;

export const ServiceTitle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;
`;

export const ServiceLogo = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  padding: 3px 2px 3.345px 2px;
  justify-content: center;
  align-items: center;
`;

export const ServiceName = styled.div`
  color: var(--blue-400);
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.6px;
`;

export const ServiceInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Social = styled.div`
  display: flex;
  gap: 3px;
`;

export const SocialIcon = styled.div`
  width: 14px;
  height: 14px;
`;

export const SocialName = styled.div`
  color: #a8a8a8;
  font-family: Pretendard;
  font-size: 8px;
  line-height: 14px;
  letter-spacing: -0.4px;
`;

export const Copyright = styled.div`
  color: var(--gray-200);
  font-family: Pretendard;
  font-size: 9px;
  line-height: 14px;
  letter-spacing: -0.45px;
`;
