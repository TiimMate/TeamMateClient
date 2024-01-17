import styled from 'styled-components';

/**
 * props: $logoUrl: logo의 url, 없으면 배경만 나와요
 * width, height는 입맛에 맞게 custom해서 쓰시면 됩니다 */
const CircleLogo = styled.div`
  background-image: url(${props => props.$logoUrl});
  background-size: cover; // 이미지가 div의 전체 영역을 커버하도록 설정
  background-position: center; // 이미지가 중앙에 위치하도록 설정
  border-radius: 50%;
  background-color: #d9d9d9;

  width: 32px;
  height: 32px;
`;

export default CircleLogo;
