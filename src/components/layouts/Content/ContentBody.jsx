import * as S from './ContentBody.style';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';

export default function ContentBody({ content }) {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  const contentImages = content.imgUrl;
  const renderSlides = () =>
    contentImages.map((image) => (
      <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
      </div>
    ));

  return (
    <S.Wrapper>
      <S.ContentBodyContainer>
        <Carousel
          showArrows={false}
          autoPlay={false}
          infiniteLoop={true}
          showThumbs={false}
          selectedItem={contentImages[currentIndex]}
          onChange={handleChange}
        >
          {renderSlides()}
        </Carousel>
        <S.Contents>{content.contents}</S.Contents>
      </S.ContentBodyContainer>
    </S.Wrapper>
  );
}
