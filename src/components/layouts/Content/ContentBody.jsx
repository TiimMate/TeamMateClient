import * as S from './ContentBody.style';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import MapContent from './MapContent';
import GymSelector from '../../ui/Selector/Gym/GymSelector';
import { useSrcImgList } from '../../../hooks/useSrcImg';

export default function ContentBody({ menu, content }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageData, setImageData] = useState([]);

  function handleChange(index) {
    setCurrentIndex(index);
  }

  const contentImages = useSrcImgList(imageData);

  useEffect(() => {
    if (!!content.link) setImageData(content.link.split(','));
  }, [content.link]);

  const renderSlides = () => {
    return contentImages[0].map((image, index) => {
      if (!image || typeof image === 'function') return null;
      console.log(image);
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
            selectedItem={
              contentImages[0] ? contentImages[0][currentIndex] : null
            }
            onChange={handleChange}
          >
            {renderSlides()}
          </Carousel>
        </S.ImageBox>

        {menu === 'location' ? <GymSelector gym={content.rentPlace} /> : null}
        <S.Contents>{content.content}</S.Contents>
      </S.ContentBodyContainer>
    </S.Wrapper>
  );
}
