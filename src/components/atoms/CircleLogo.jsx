import styled from 'styled-components';

/**
 * props: $logoUrl: logo의 url, 없으면 배경만 나와요
 * width, height는 입맛에 맞게 custom해서 쓰시면 됩니다 */
const CircleLogo = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 50%;

  background-image: url(${props => props.$logoUrl});
  background-size: cover;
  background-position: center;
  background-color: #d9d9d9;
`;

export default CircleLogo;
