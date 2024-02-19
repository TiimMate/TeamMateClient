import { useEffect, useState } from 'react';
import { downloadImage } from '../services/imageApi';

function useSrcImg(filename) {
  const [img, setImg] = useState(null);

  useEffect(() => {
    const getImg = async () => {
      const src = await downloadImage(filename);
      setImg(src.Body);
    };
    if (filename) {
      getImg();
    }
  }, [filename]);
  return [img, setImg];
}

export function useSrcImgList(filenameList) {
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    const getImgs = async () => {
      const images = await Promise.all(
        filenameList.map(async (filename) => {
          try {
            const src = await downloadImage(filename);
            return src.Body;
          } catch (error) {
            console.error('Error downloading image:', error);
            return null;
          }
        }),
      );
      setImgList(images.filter(Boolean));
    };

    if (filenameList && filenameList.length > 0) {
      getImgs();
    }
  }, [filenameList]);

  return [imgList, setImgList];
}
