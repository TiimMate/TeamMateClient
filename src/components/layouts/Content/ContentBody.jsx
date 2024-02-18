import * as S from './ContentBody.style';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect, useRef } from 'react';
import MapContent from './MapContent';
import { useSrcImgList } from '../../../hooks/useSrcImg';

export default function ContentBody({ menu, content }) {
  const [currentIndex, setCurrentIndex] = useState();

  function handleChange(index) {
    setCurrentIndex(index);
  }

  const imageData = content.imageUrls.length === 0 ? '' : content.imageUrls;
  const contentImages = useSrcImgList(imageData);
  console.log('contentImages', contentImages);

  const renderSlides = () => {
    return contentImages
      .filter((image) => image !== null && typeof image !== 'function') // null 및 함수 필터링
      .map((image, index) => {
        if (!image || typeof image !== 'object') return null; // 이미지가 아닌 경우 null 반환
        console.log(image.url);
        return (
          <div key={index}>
            <img src={image.url} alt={image.url} />
          </div>
        );
      });
  };

  // const renderSlides = () => {
  //   if (!contentImages || contentImages === undefined) return null;
  //   return contentImages.map((image) => {
  //     console.log(image.url);
  //     return (
  //       image && (
  //         <div key={image.url}>
  //           <img src={image.url} alt={image.url} />
  //         </div>
  //       )
  //     );
  //   });
  // };

  // useEffect(() => {
  //   kakao.maps.load(() => {
  //     var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
  //     var options = {
  //       //지도를 생성할 때 필요한 기본 옵션
  //       center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  //       level: 3, //지도의 레벨(확대, 축소 정도)
  //     };

  //     const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  //   });
  // }, []);

  return (
    <S.Wrapper>
      <S.ContentBodyContainer>
        <S.Image>
          <Carousel
            showArrows={true}
            autoPlay={false}
            infiniteLoop={true}
            showThumbs={false}
            showDots={false}
            selectedItem={contentImages ? contentImages[currentIndex] : null}
            onChange={handleChange}
          >
            {renderSlides()}
          </Carousel>
        </S.Image>

        {menu === 'location' ? <MapContent workFor={'detail'} /> : null}

        <S.Contents>{content.contnet}</S.Contents>
      </S.ContentBodyContainer>
    </S.Wrapper>
  );
}
