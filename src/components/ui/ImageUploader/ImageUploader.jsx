import * as S from './ImageUploader.style';
import React from 'react';
import { useRef, useState } from 'react';
import camera from '../../../assets/btn_camera.svg';

export default function ImageUploader() {
  const fileInput = useRef();
  const [imageList, setImageList] = useState([]);
  const handleButtonClick = () => {
    fileInput.current.click();
  };

  const handleFileChange = (e) => {
    const newImgList = e.target.files;
    const tempImgList = [];

    for (let i = 0; i < newImgList.length; i++) {
      tempImgList.push({
        id: newImgList[i].name,
        file: newImgList[i],
        url: URL.createObjectURL(newImgList[i]),
      });
    }
    setImageList(imageList.concat(tempImgList));
  };

  const addImageList = () => {
    return imageList.map((image) => {
      return (
        <div key={image.url}>
          <S.NewImage alt='preview' src={image.url}></S.NewImage>
        </div>
      );
    });
  };

  return (
    <>
      <S.Label>이미지</S.Label>
      <S.Image type='button' onClick={handleButtonClick}>
        <img src={camera} alt='camera'></img>
      </S.Image>
      <input
        type='file'
        ref={fileInput}
        accept='.jpg,.png,.svg'
        multiple
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <S.NewImageList>{addImageList()}</S.NewImageList>
    </>
  );
}
