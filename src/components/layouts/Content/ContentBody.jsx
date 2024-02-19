import * as S from './ContentBody.style';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect, useRef } from 'react';
import MapContent from './MapContent';
import { useSrcImgList } from '../../../hooks/useSrcImg';

export default function ContentBody({ menu, content }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageData, setImageData] = useState([]);

  function handleChange(index) {
    setCurrentIndex(index);
  }

  const contentImages = useSrcImgList(imageData);
  console.log(imageData);

  useEffect(() => {
    setImageData(content.link.split(','));
  }, [content.link]);

  const renderSlides = () => {
    return contentImages.map((image, index) => {
      if (!image || typeof image !== 'object') return null;
      console.log(image);
      //let image_src = 'data:image/webp;base64,' + image;

      return (
        <S.ImageContainer key={index}>
          <S.Image src={image} alt={index} />
        </S.ImageContainer>
      );
    });
  };

  return (
    <S.Wrapper>
      <S.ContentBodyContainer>
        <S.ImageBox>
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
        </S.ImageBox>

        {menu === 'location' ? <MapContent workFor={'detail'} /> : null}

        <S.Contents>{content.contnet}</S.Contents>
      </S.ContentBodyContainer>
    </S.Wrapper>
  );
}
