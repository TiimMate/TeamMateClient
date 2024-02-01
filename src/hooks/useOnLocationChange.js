import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useOnLocationChange(callback) {
  const location = useLocation();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, [location]);
}

export default useOnLocationChange;
