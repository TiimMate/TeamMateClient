import * as S from './ImageUploader.style';
import React, { useDebugValue, useEffect } from 'react';
import { useRef, useState } from 'react';
import camera from '../../../assets/btn_camera.svg';
import close from '../../../assets/icon_close.svg';

export default function ImageUploader({ imageList, setImageList }) {
  console.log('imageList', imageList);

  const imageInput = useRef();

  const handleButtonClick = (e) => {
    imageInput.current.click();
  };

  const handleFileChange = (event) => {
    const newImgList = event.target.files;
    const tempImgList = [];

    if (newImgList[0]) {
      for (let i = 0; i < newImgList.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(newImgList[i]);
        reader.onload = () => {
          tempImgList.push(reader.result);
          //setImageList((list) => list.concat(tempImgList));

          setImageList(imageList.concat(tempImgList));
        };
      }
    }
  };

  const addImageList = () =>
    imageList.map((image) => (
      <S.NewImageBox key={image}>
        <S.DeleteImageButton onClick={() => onRemoveToAdd(image)}>
          <img src={close} alt='close' />
        </S.DeleteImageButton>
        <S.NewImage alt='preview' src={image}></S.NewImage>
      </S.NewImageBox>
    ));

  const onRemoveToAdd = (image) => {
    setImageList(imageList.filter((item) => item !== image));
  };

  return (
    <S.ImageSection>
      <S.Label htmlFor='uploadImage'>이미지</S.Label>
      <S.Image type='button' onClick={handleButtonClick}>
        <img src={camera} alt='camera'></img>
        <input
          id='uploadImage'
          type='file'
          accept='.jpg,.png,.svg'
          multiple
          ref={imageInput}
          style={{ display: 'none' }}
          onChange={(e) => {
            handleFileChange(e);
          }}
        />
      </S.Image>

      <S.NewImageList>{addImageList()}</S.NewImageList>
    </S.ImageSection>
  );
}
