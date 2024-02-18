import { useEffect, useState } from 'react';
import { downloadImage } from '../services/imageApi';

function useSrcImg(filename) {
  const [img, setImg] = useState(null);

  useEffect(() => {
    const getImg = async () => {
      const src = await downloadImage(filename);
      console.log(src);
      setImg(src.Body);
    };
    if (filename) {
      getImg();
    }
  }, [filename]);
  return [img, setImg];
}

export default useSrcImg;
