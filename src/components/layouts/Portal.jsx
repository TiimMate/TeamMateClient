import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ portalKey, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.getElementById(portalKey))
    : null;
};

export default Portal;
