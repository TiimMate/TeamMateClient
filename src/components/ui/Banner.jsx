import styled from 'styled-components';

const Banner = styled.div`
  position: relative;

  width: 100%;
  padding-top: 56.25%; // 16:9
  background-size: cover; // 배경 이미지가 div를 꽉 채우도록
  background-position: center; // 배경 이미지 중앙 정렬
  background-color: #0075ff;
`;

export default Banner;
